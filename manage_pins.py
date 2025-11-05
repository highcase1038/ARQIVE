from pins.models import pin
from decimal import Decimal

print("=" * 60)
print("Pin Management Tool")
print("=" * 60)

current_page = 0

def show_menu():
    print("\n" + "=" * 60)
    print("1. Search pin by ID")
    print("2. Search by address/location")
    print("3. Search by title")
    print("4. Show first 20 pins")
    print("5. Show next 20 pins")
    print("6. Show previous 20 pins")
    print("7. Delete pin")
    print("8. Update coordinates")
    print("9. Swap coordinates")
    print("0. Exit")
    print("=" * 60)

def search_id():
    pid = input("Enter pin ID: ")
    try:
        p = pin.objects.get(id=pid)
        print(f"\nID: {p.id} - {p.title}")
        print(f"Coords: ({p.latitude}, {p.longitude})")
        print(f"Address: {p.address}")
        print(f"City: {p.locality}, {p.region}, {p.country}")
        print(f"Maps: https://www.google.com/maps?q={p.latitude},{p.longitude}")
    except:
        print("Not found")

def search_addr():
    term = input("Enter location: ")
    results = pin.objects.filter(address__icontains=term) | pin.objects.filter(locality__icontains=term) | pin.objects.filter(region__icontains=term) | pin.objects.filter(country__icontains=term)
    print(f"\nFound {results.count()} pins:")
    for p in results[:20]:
        print(f"  ID: {p.id} - {p.title}")
        print(f"    {p.locality}, {p.region}")

def search_title():
    term = input("Enter title keyword (case-insensitive): ")
    results = pin.objects.filter(title__icontains=term)
    print(f"\nFound {results.count()} pins matching '{term}':")
    for p in results[:20]:
        print(f"  ID: {p.id} - {p.title}")
        print(f"    {p.locality}, {p.region} ({p.latitude}, {p.longitude})")
        print(f"    Maps: https://www.google.com/maps?q={p.latitude},{p.longitude}")

def show_pins(page):
    global current_page
    current_page = page
    total = pin.objects.count()
    start = page * 20
    pins = pin.objects.all().order_by('-id')[start:start+20]
    print(f"\nPage {page+1} ({start+1}-{start+20} of {total}):")
    for p in pins:
        print(f"  ID: {p.id} - {p.title}")
        print(f"    {p.locality}, {p.region} ({p.latitude}, {p.longitude})")

def delete():
    pid = input("Enter pin ID to delete: ")
    try:
        p = pin.objects.get(id=pid)
        print(f"\nWill delete: {p.id} - {p.title}")
        if input("Type DELETE to confirm: ") == "DELETE":
            p.delete()
            print("Deleted!")
    except:
        print("Not found")

def update():
    pid = input("Enter pin ID: ")
    try:
        p = pin.objects.get(id=pid)
        print(f"\nCurrent: ({p.latitude}, {p.longitude})")
        lat = input("New latitude: ")
        lng = input("New longitude: ")
        print(f"Check: https://www.google.com/maps?q={lat},{lng}")
        if input("Type UPDATE to confirm: ") == "UPDATE":
            p.latitude = Decimal(lat)
            p.longitude = Decimal(lng)
            p.save()
            print("Updated!")
    except:
        print("Error")

def swap():
    pid = input("Enter pin ID: ")
    try:
        p = pin.objects.get(id=pid)
        print(f"\nCurrent: ({p.latitude}, {p.longitude})")
        print(f"Swapped: ({p.longitude}, {p.latitude})")
        if input("Type SWAP to confirm: ") == "SWAP":
            p.latitude, p.longitude = p.longitude, p.latitude
            p.save()
            print("Swapped!")
    except:
        print("Error")

while True:
    show_menu()
    choice = input("\nChoice: ")
    if choice == '1': search_id()
    elif choice == '2': search_addr()
    elif choice == '3': search_title()
    elif choice == '4': show_pins(0)
    elif choice == '5': show_pins(current_page + 1)
    elif choice == '6': show_pins(max(0, current_page - 1))
    elif choice == '7': delete()
    elif choice == '8': update()
    elif choice == '9': swap()
    elif choice == '0': break
    else: print("Invalid")

print("Goodbye!")