from pins.models import pin
from decimal import Decimal

print("=" * 60)
print("Checking for Pins in Ocean Worldwide")
print("=" * 60)

total_pins = pin.objects.count()
print(f"\nTotal pins: {total_pins}\n")

# Major land regions (continents)
# Format: (min_lat, max_lat, min_lng, max_lng, name)
land_regions = [
    # North America
    (15, 72, -170, -50, "North America"),
    # South America  
    (-56, 13, -82, -34, "South America"),
    # Europe
    (36, 71, -10, 40, "Europe"),
    # Africa
    (-35, 37, -18, 52, "Africa"),
    # Asia
    (-10, 77, 26, 180, "Asia East"),
    (-10, 77, -180, -169, "Asia Far East"),
    # Oceania/Australia
    (-47, -10, 113, 154, "Australia"),
    # Middle East/West Asia
    (12, 42, 34, 75, "Middle East"),
]

print("Checking which pins are NOT on land...\n")

ocean_pins = []
all_pins = pin.objects.all()

for p in all_pins:
    lat = float(p.latitude)
    lng = float(p.longitude)
    
    # Skip obvious invalid coordinates
    if lat == 0 and lng == 0:
        ocean_pins.append((p, "At (0,0) - Gulf of Guinea"))
        continue
    
    if lat < -90 or lat > 90 or lng < -180 or lng > 180:
        ocean_pins.append((p, "Invalid coordinates"))
        continue
    
    # Check if pin is in any land region
    on_land = False
    for min_lat, max_lat, min_lng, max_lng, region_name in land_regions:
        if min_lat <= lat <= max_lat and min_lng <= lng <= max_lng:
            on_land = True
            break
    
    if not on_land:
        ocean_pins.append((p, "Not in any major land region"))

# Display ocean pins
print("=" * 60)
print(f"Found {len(ocean_pins)} pins possibly in ocean")
print("=" * 60)
print()

for p, reason in ocean_pins:
    print(f"ID: {p.id}")
    print(f"Title: {p.title}")
    print(f"Coordinates: ({p.latitude}, {p.longitude})")
    print(f"Reason: {reason}")
    print(f"Address: {p.address}")
    print(f"City: {p.locality}")
    print(f"Region: {p.region}")
    print(f"Country: {p.country}")
    print("-" * 40)
    print()

# Check for address mismatches
print("=" * 60)
print("Checking for coordinate/address mismatches")
print("=" * 60)
print()

mismatches = []

# Check US pins with wrong hemisphere
us_pins = pin.objects.filter(country__icontains='United') | pin.objects.filter(country__icontains='USA') | pin.objects.filter(country__icontains='America')
for p in us_pins:
    lat = float(p.latitude)
    lng = float(p.longitude)
    # US should be: lat positive (20-70), lng negative (-170 to -60)
    if lat < 0 or lng > 0:
        mismatches.append((p, f"US pin but coords ({lat}, {lng}) wrong hemisphere"))

# Check Europe pins
eu_pins = pin.objects.filter(country__icontains='UK') | pin.objects.filter(country__icontains='France') | pin.objects.filter(country__icontains='Germany') | pin.objects.filter(country__icontains='Italy') | pin.objects.filter(country__icontains='Spain')
for p in eu_pins:
    lat = float(p.latitude)
    lng = float(p.longitude)
    # Europe should be: lat positive (35-70), lng between (-10, 40)
    if not (35 <= lat <= 70 and -10 <= lng <= 40):
        mismatches.append((p, f"Europe pin but coords ({lat}, {lng}) outside Europe"))

# Check Asia pins
asia_pins = pin.objects.filter(country__icontains='China') | pin.objects.filter(country__icontains='Japan') | pin.objects.filter(country__icontains='Korea') | pin.objects.filter(country__icontains='India')
for p in asia_pins:
    lat = float(p.latitude)
    lng = float(p.longitude)
    # Asia should be: lat between (-10, 77), lng between (26, 180)
    if not (-10 <= lat <= 77 and (26 <= lng <= 180 or -180 <= lng <= -169)):
        mismatches.append((p, f"Asia pin but coords ({lat}, {lng}) outside Asia"))

# Check Australia pins
au_pins = pin.objects.filter(country__icontains='Australia')
for p in au_pins:
    lat = float(p.latitude)
    lng = float(p.longitude)
    # Australia should be: lat negative (-47 to -10), lng positive (113 to 154)
    if not (-47 <= lat <= -10 and 113 <= lng <= 154):
        mismatches.append((p, f"Australia pin but coords ({lat}, {lng}) outside Australia"))

# Check Africa pins
africa_pins = pin.objects.filter(country__icontains='South Africa') | pin.objects.filter(country__icontains='Egypt') | pin.objects.filter(country__icontains='Kenya') | pin.objects.filter(country__icontains='Nigeria')
for p in africa_pins:
    lat = float(p.latitude)
    lng = float(p.longitude)
    # Africa should be: lat between (-35, 37), lng between (-18, 52)
    if not (-35 <= lat <= 37 and -18 <= lng <= 52):
        mismatches.append((p, f"Africa pin but coords ({lat}, {lng}) outside Africa"))

print(f"Found {len(mismatches)} pins with coordinate/address mismatch\n")
for p, reason in mismatches:
    print(f"ID: {p.id}")
    print(f"Title: {p.title}")
    print(f"Reason: {reason}")
    print(f"Country: {p.country}")
    print(f"City: {p.locality}, {p.region}")
    print("-" * 40)
    print()

# Summary
print("=" * 60)
print("SUMMARY - Pins to Delete")
print("=" * 60)

all_problem_ids = set()
for p, reason in ocean_pins:
    all_problem_ids.add(p.id)
for p, reason in mismatches:
    all_problem_ids.add(p.id)

print(f"\nTotal problematic pins: {len(all_problem_ids)}")
print(f"  - Likely in ocean: {len(ocean_pins)}")
print(f"  - Coordinate/address mismatch: {len(mismatches)}")
print()

if len(all_problem_ids) > 0:
    sorted_ids = sorted(list(all_problem_ids))
    print(f"Pin IDs to review/delete: {sorted_ids}")
    print()
    print("To delete ALL these pins:")
    print("  docker compose exec django python GlobalTraqs/manage.py shell")
    print()
    print("Then paste:")
    print("  from pins.models import pin")
    print(f"  ids = {sorted_ids}")
    print("  pin.objects.filter(id__in=ids).delete()")
    print()
    print("Or delete only (0,0) pins:")
    zero_ids = [p.id for p, r in ocean_pins if "(0,0)" in r]
    if zero_ids:
        print(f"  pin.objects.filter(id__in={zero_ids}).delete()")
else:
    print("No problematic pins found!")

print()