import React from "react";
import { Link } from "react-router-dom";
function Terms() {
  return (
    <div className={"main-content-div"}>
      <>
        <meta content="text/html; charset=UTF-8" httpEquiv="content-type" />
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n      @import url(https://themes.googleusercontent.com/fonts/css?kit=fvyYZ8D_r6q1snYdb-tnF1rUgkgg8-H26_WMwI34PRxvqss3OjsEKkJC8rkpyfhv);\n      ol {\n        margin: 0;\n        padding: 0;\n      }\n      table td,\n      table th {\n        padding: 0;\n      }\n      .c5 {\n        color: #000000;\n        font-weight: 400;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 1rem;\n        font-family: 'Arial';\n        font-style: normal;\n      }\n      .c8 {\n        padding-top: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1.15;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n        height: 1rem;\n      }\n      .c0 {\n        background-color: #ffffff;\n        padding-top: 0pt;\n        padding-bottom: 1rem;\n        line-height: 1.15;\n        orphans: 2;\n        widows: 2;\n        text-align: justify;\n      }\n      .c18 {\n        color: #000000;\n        font-weight: 400;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 1rem;\n        font-family: 'Arial';\n        font-style: normal;\n      }\n      .c16 {\n        padding-top: 0pt;\n        padding-bottom: 1rem;\n        line-height: 1.15;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .c1 {\n        padding-top: 0pt;\n        padding-bottom: 1rem;\n        line-height: 1.15;\n        orphans: 2;\n        widows: 2;\n        text-align: justify;\n      }\n      .c13 {\n        padding-top: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1.15;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .c10 {\n        padding-top: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1.15;\n        orphans: 2;\n        widows: 2;\n        text-align: justify;\n      }\n      .c7 {\n        color: #000000;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 1.25rem;\n        font-family: 'Arial';\n        font-style: normal;\n      }\n      .c19 {\n        padding-top: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1;\n        text-align: left;\n      }\n      .c2 {\n        font-size: .25rem;\n        font-family: 'Arial';\n        font-weight: 400;\n      }\n      .c3 {\n        text-decoration-skip-ink: none;\n        -webkit-text-decoration-skip: none;\n        text-decoration: underline;\n padding: 0 .25ch; \n   }\n      .c12 {\n        color: #1155cc !important;\n        text-decoration: inherit;\n   }\n      .c20 {\n        border: 1px solid black;\n        margin: 5px;\n      }\n      .c14 {\n        max-width: 46.75rem;\n        padding: 3rem 3rem 3rem 3rem;\n      }\n      .c9 {\n        margin-left: 3rem;\n      }\n      .c6 {\n        font-weight: 700;\n      }\n      .c11 {\n        margin-left: 2.5rem;\n      }\n      .c17 {\n        color: #1155cc;\n      }\n      .c15 {\n        font-size: .75rem;\n      }\n      .c4 {\n        background-color: #ffffff;\n      }\n      .title {\n        padding-top: 0pt;\n        color: #000000;\n        font-size: 1.75rem;\n        padding-bottom: 1rem;\n        font-family: 'Arial';\n        line-height: 1.15;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .subtitle {\n        padding-top: 0pt;\n        color: #666666;\n        font-size: 1.5rem;\n        padding-bottom: 1rem;\n        font-family: 'Arial';\n        line-height: 1.15;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      li {\n        color: #000000;\n        font-size: 1rem;\n        font-family: 'Arial';\n      }\n      p {\n        margin: 0;\n        color: #000000;\n        font-size: 1rem;\n        font-family: 'Arial';\n      }\n      h1 {\n        padding-top: 0pt;\n        color: #000000;\n        font-size: 1rem;\n        padding-bottom: 1rem;\n        font-family: 'Arial';\n        line-height: 1.15;\n        page-break-after: avoid;\n        font-style: italic;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h2 {\n        padding-top: 0pt;\n        color: #000000;\n        font-weight: 700;\n        font-size: 1rem;\n        padding-bottom: 1rem;\n        font-family: 'Arial';\n        line-height: 1.15;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h3 {\n        padding-top: 0pt;\n        color: #000000;\n        font-weight: 700;\n        font-size: 1rem;\n        padding-bottom: 0pt;\n        font-family: 'Arial';\n        line-height: 1.15;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h4 {\n        padding-top: 0pt;\n        -webkit-text-decoration-skip: none;\n        color: #000000;\n        text-decoration: underline;\n        font-size: 1rem;\n        padding-bottom: 0pt;\n        line-height: 1.15;\n        page-break-after: avoid;\n        text-decoration-skip-ink: none;\n        font-family: 'Arial';\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h5 {\n        padding-top: 1rem;\n        color: #666666;\n        font-size: 1rem;\n        padding-bottom: .25rem;\n        font-family: 'Arial';\n        line-height: 1.15;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h6 {\n        padding-top: 1rem;\n        color: #666666;\n        font-size: 1rem;\n        padding-bottom: .25rem;\n        font-family: 'Arial';\n        line-height: 1.15;\n        page-break-after: avoid;\n        font-style: italic;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n    ",
          }}
        />
        <p className="c16">
          <span className="c7 c6">TERMS OF USE</span>
        </p>
        <p className="c1">
          <span className="c7 c6 c4">Introduction</span>
        </p>
        <p className="c1">
          <span className="c4">
            Welcome to The arqive platform, which is owned and operated by
            Cynthia Wang and Zachary Vernon (
          </span>
          <span className="c6 c4">“The arqive”</span>
          <span className="c4">&nbsp;</span>
          <span className="c6 c4">“we”</span>
          <span className="c4">&nbsp;or</span>
          <span className="c6 c4">“us”</span>
          <span className="c4">), with a social mission of</span>
          <span>
            providing the full range of queer stories from historical/archival
            to personal by geolocating them and digitally preserving them.
          </span>
          <span className="c4">&nbsp;Because</span>
          <span>
            The arqive is dedicated to maintaining a safe, supportive place for
            all users, we follow some basic rules. By accessing or using our
            services, you agree to be bound by our Terms.{" "}
          </span>
          <span className="c4">These terms of service (which include our</span>
          <span className="c3 c4">
            <a
              className="c12"
              href="#ContentPolicy"
            >
              Content Policy
            </a>
          </span>
          <span className="c4">&nbsp;(below) and our</span>
          <span className="c3 c4">
            <Link
              className="c12"
              to="/PrivacyPolicy"

            >
              Privacy Policy
            </Link>
          </span>
          <span className="c4">) (collectively, the</span>
          <span className="c6 c4">“Terms”</span>
          <span className="c4">
            ) are a contract between you and The arqive. By using thearqive.com
            (the{" "}
          </span>
          <span className="c6 c4">“Site”</span>
          <span className="c4">
            ), creating your The arqive account and using the Site or any future
            mobile applications to post various content to the The arqive
            community, including stories you create, comments and messages, or
            to access and view The arqive content or other user content
            (together with the Site, the{" "}
          </span>
          <span className="c6 c4">“Services”</span>
          <span className="c4">), you are agreeing to these Terms.</span>
          <span>
            If you do not agree to these Terms, you may not access or use our
            Services. These Terms are effective as of January 12, 2024 (the “
          </span>
          <span className="c6">Effective Date</span>
          <span className="c5">”).</span>
        </p>
        <p className="c0">
          <span>Additionally, please read the The arqive</span>
          <span className="c3">Privacy Policy</span>
          <span className="c5">
            , as it explains how we collect, use, and share information about
            you when you access or use our Services.
          </span>
        </p>
        <p className="c1 c11">
          <span className="c6">1.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span className="c7 c6">Need an Account</span>
        </p>
        <p className="c0">
          <span className="c5">
            You can only access and use a small portion of our Site and Services
            without registering for an account. To get the most out of The
            arqive platform, you’ll need to register an account, choose an
            account name, and set a password.
          </span>
        </p>
        <p className="c0">
          <span className="c5">
            You are responsible for all the activity on your account, and for
            keeping your password confidential. If you share your account
            information with anyone, that other person may be able to take
            control of the account, and we may not be able to determine who the
            proper account holder is. We are not liable to you (or anyone you
            share your account information with) as a result of your actions
            under the circumstances described herein. If you find out someone
            has used your account without your permission, you should report it
            at info@thearqive.com.
          </span>
        </p>
        <p className="c1 c11">
          <span className="c6">2.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span className="c7 c6">Your Rights and Responsibilities</span>
        </p>
        <p className="c0">
          <span>
            The Services may contain information, text, links, graphics, photos,
            videos, music, sound, code, software, or other materials (“
          </span>
          <span className="c6">Content</span>
          <span>
            ”), including Content created with or submitted to the Services by
            you or through your Account (“
          </span>
          <span className="c6">Your Content</span>
          <span className="c5">
            ”). We take no responsibility for and we do not expressly or
            implicitly endorse any of Your Content.
          </span>
        </p>
        <p className="c0">
          <span className="c5">
            The arqive grants you a personal, non-transferable, non-exclusive,
            revocable, limited license to use and access the Services solely as
            permitted by these Terms. We reserve all rights not expressly
            granted to you by these Terms.
          </span>
        </p>
        <p className="c0">
          <span className="c5">
            By submitting Your Content to the Services, you represent and
            warrant that you have all rights, power, and authority necessary to
            grant the rights to Your Content contained within these Terms.
            Because you alone are responsible for Your Content, you may expose
            yourself to liability if you post or share Content without all
            necessary rights.
          </span>
        </p>
        <p className="c0">
          <span className="c5">
            You retain any ownership rights you have in Your Content, but you
            grant The arqive the following license to use that Content:
          </span>
        </p>
        <p className="c0">
          <span className="c5">
            When Your Content is created with or submitted to the Services, you
            grant us a worldwide, royalty-free, perpetual, irrevocable,
            non-exclusive, transferable, and sublicensable license to use, copy,
            modify, adapt, prepare derivative works from, distribute, perform,
            and display Your Content and any name, username, voice, or likeness
            provided in connection with Your Content in all media formats and
            channels now known or later developed. This license includes the
            right for us to make Your Content available for syndication,
            broadcast, distribution, or publication by other companies,
            organizations, or individuals who partner with The arqive and to
            profit from such uses of Your Content. You also agree that we may
            remove metadata associated with Your Content, and you irrevocably
            waive any claims and assertions of moral rights or attribution with
            respect to Your Content.
          </span>
        </p>
        <p className="c1">
          <span className="c5">
            In your use of the Services you may enter into additional terms and
            conditions and other agreements that alter or override these Terms.
            In case of any conflict or inconsistency, the terms and conditions
            of those additional terms and agreements would override these Terms
            as it relates to special programs.
          </span>
        </p>
        <p className="c0">
          <span className="c5">
            You are responsible for the content you post. This means you assume
            all risks related to its publication and display, including someone
            else’s reliance on its accuracy and any claims relating to
            intellectual property or other legal rights.
          </span>
        </p>
        <p className="c0">
          <span>
            Before posting any content to The arqive, it is important that you
            read our{" "}
          </span>
          <span className="c3">Content Policy</span>
          <span>
            . Although we have no obligation to screen, edit, or monitor Your
            Content, we may, in our sole discretion, delete or remove Your
            Content at any time and for any reason, including for violation of
            these Terms, violation of our{" "}
          </span>
          <span className="c3">Content Policy</span>
          <span className="c5">
            , or if you otherwise create liability for us.
          </span>
        </p>
        <p className="c1 c11">
          <span className="c6">3.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span className="c7 c6">Things You Can Not Do</span>
        </p>
        <p className="c0">
          <span>
            When accessing or using the Services, you must respect others and
            their rights, including by following these Terms and the{" "}
          </span>
          <span className="c3">Content Policy</span>
          <span className="c5">
            , so that we all may continue to use and enjoy the Services. We
            support the responsible reporting of security vulnerabilities. To
            report a security issue, please send an email to info@thearqive.com.
          </span>
        </p>
        <p className="c0">
          <span className="c5">
            When accessing or using our Services, you will not:
          </span>
        </p>
        <p className="c0 c9">
          <span>a.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span>Create or submit Content that violates our</span>
          <span className="c3">Content Policy</span>
          <span className="c5">
            &nbsp;or attempt to circumvent any content-filtering techniques we
            use;
          </span>
        </p>
        <p className="c0 c9">
          <span>b.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span className="c5">
            Use the Services to violate applicable law or infringe any person or
            entity's intellectual property or any other proprietary rights;
          </span>
        </p>
        <p className="c0 c9">
          <span>c.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span className="c5">
            Attempt to gain unauthorized access to another user’s Account or to
            the Services (or to other computer systems or networks connected to
            or used together with the Services);
          </span>
        </p>
        <p className="c0 c9">
          <span>d.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span className="c5">
            Upload, transmit, or distribute to or through the Services any
            computer viruses, worms, or other software intended to interfere
            with the intended operation of a computer system or data;
          </span>
        </p>
        <p className="c0 c9">
          <span>e.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span className="c5">
            Use the Services to harvest, collect, gather or assemble information
            or data regarding the Services or users of the Services, except as
            permitted by these Terms or in a separate agreement with The arqive;
          </span>
        </p>
        <p className="c0 c9">
          <span>f.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </span>
          <span className="c5">
            Use the Services in any manner that could interfere with, disrupt,
            negatively affect, or inhibit other users from fully enjoying the
            Services or that could damage, disable, overburden, or impair the
            functioning of the Services in any manner;
          </span>
        </p>
        <p className="c0 c9">
          <span>g.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span className="c5">
            Intentionally negate any user's actions to delete or edit their
            Content on the Services; or
          </span>
        </p>
        <p className="c0 c9">
          <span>h.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span>
            Access, query, or search the Services with any automated system,
            other than through our published interfaces and pursuant to their
            applicable terms. However, we conditionally grant you permission to
            crawl the Services for the sole purpose of and solely to the extent
            necessary for creating publicly available searchable indices of the
            materials subject to the parameters set forth in our robots.txt
          </span>
          <span className="c15">&nbsp;</span>
          <span className="c5">&nbsp;file.</span>
        </p>
        <p className="c1 c9">
          <span>i.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </span>
          <span className="c5">
            Alter, stretch, condense, embellish, or otherwise change our logo,
            Content, software code or other user’s Content in any way without
            our or such other user’s prior written consent.
          </span>
        </p>
        <p className="c0">
          <span className="c5">
            Except as permitted through the Services or as otherwise permitted
            by us in writing, your license does not include the right to:
          </span>
        </p>
        <p className="c0 c9">
          <span>a.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span className="c5">
            license, sell, transfer, assign, distribute, host, or otherwise
            commercially exploit the Services or Content;
          </span>
        </p>
        <p className="c0 c9">
          <span>b.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span className="c5">
            copy, modify, prepare derivative works of, disassemble, decompile,
            or reverse engineer any part of the Services or Content; or
          </span>
        </p>
        <p className="c0 c9">
          <span>c.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span className="c5">
            access the Services or Content to build a similar or competitive
            website, product, or service, except as permitted under these Terms
            or United States Copyright Laws.
          </span>
        </p>
        <p className="c1 c11">
          <span className="c6">4.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span className="c7 c6">Our Rights and Responsibilities</span>
        </p>
        <p className="c0">
          <span className="c5">
            Unless otherwise stated, the text, software, images, graphics,
            logos, icons, photographs, illustrations, audio clips, video clips,
            design elements, product names, company names, copyrights and
            copyrightable materials, trademarks, trade dress, service marks, and
            other Site content (collectively referred to herein as the "Site
            Content") are the exclusive property of The arqive or its licensors.
            Except where such permission is specifically granted, you may not
            modify, publish, transmit, participate in the transfer or sale,
            create derivative works, or in any way exploit any of the Site
            Content, in whole or in part. You are granted permission to display,
            copy, distribute, and download Site Content solely for personal,
            non-commercial use provided that you make no modifications to the
            Site Content and that all copyright and other proprietary notices
            contained in the Site Content are retained. Any permission granted
            under these Terms terminates automatically without further notice if
            you breach any of the above terms. Upon such termination, you agree
            to immediately destroy any downloaded and/or printed materials. Any
            unauthorized use of any material contained on this Site may violate
            domestic and/or international copyright laws, the laws of privacy
            and publicity, and communications regulations and statutes. Use of
            Site Content not specifically permitted under these Terms is
            strictly prohibited.
          </span>
        </p>
        <p className="c1">
          <span className="c5">
            Nothing in these Terms grants, transfers, or conveys, nor may be
            construed or operate as a grant, transfer, or conveyance to you or
            any other person of any right, title, or interest in, or to, any
            Site Content or The arqive intellectual property, including but not
            limited to any trademark, trade name, service mark or other
            proprietary identifying symbols used by us from time to time on or
            in connection with the Site, or any feature or functionality
            thereof.
          </span>
        </p>
        <p className="c0">
          <span className="c5">
            We reserve the right to modify, suspend, or discontinue the Services
            (in whole or in part) at any time, with or without notice to you.
            Any future release, update, or other addition to functionality of
            the Services will be subject to these Terms, which may be updated
            from time to time. You agree that we will not be liable to you or to
            any third party for any modification, suspension, or discontinuation
            of the Services or any part thereof.
          </span>
        </p>
        <p className="c1">
          <span className="c5">
            The arqive may change, terminate, or restrict access to any aspect
            of the Services, at any time, without notice. We can remove any
            content you post or submit for any reason. The arqive may access,
            read, preserve, and disclose any information as we reasonably
            believe is necessary to (i) satisfy any applicable law, regulation,
            legal process or governmental request, (ii) enforce the Terms,
            including investigation of potential violations, (iii) detect,
            prevent, or otherwise address fraud, security, or technical issues,
            (iv) respond to user support requests, or (v) protect the rights,
            property, or safety of the Services, Site users, and the public.
          </span>
        </p>
        <p className="c1 c11">
          <span className="c6">5.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span className="c7 c6">Copyright, The DMCA and Takedowns</span>
        </p>
        <p className="c1">
          <span className="c5">
            The arqive respects the intellectual property of others and requires
            that users of our Services do the same. We have a policy that
            includes the removal of any infringing materials from the Services
            and for the termination, in appropriate circumstances, of users of
            our Services who are repeat infringers.
          </span>
        </p>
        <p className="c0">
          <span>
            If you believe that anything on our Services infringes a copyright
            that you own or control, you may notify The arqive by filling out
            a{" "}
          </span>
          <span className="c3 c17">
            <a
              className="c12"
              href="https://www.dmca.com/FAQ/What-is-a-DMCA-Takedown"
            >
              DMCA
            </a>
          </span>
          <span>&nbsp;request</span>
          <span className="c5">
            &nbsp;and sending it to: info@thearqive.com.
          </span>
        </p>
        <p className="c0">
          <span className="c5">
            Also, please note that if you knowingly misrepresent that any
            activity or material on our Service is infringing, you may be liable
            to The arqive for certain costs and damages.
          </span>
        </p>
        <p className="c0">
          <span>
            If we remove Your Content in response to a copyright or trademark
            notice, we will notify you via email to the email address on record
            with our Service. If you believe Your Content was wrongly removed
            due to a mistake or misidentification, you can send a counter
            notification to us at: info@thearqive.com. Please see
          </span>
          <span>
            <a
              className="c12"
              href="http://www.copyright.gov/title17/92chap5.html"
            >
              &nbsp;17 U.S.C. §512(g)(3)
            </a>
          </span>
          <span className="c5">
            &nbsp;for the requirements of a proper counter notification.
          </span>
        </p>
        <p className="c1">
          <span className="c5">
            We sometimes come across websites that have illegally scraped
            content from The arqive. When we find these sites we do our best to
            have them shut down. To act on behalf of our users we need to have
            your legal permission to do that so we ask for it here when you sign
            up. You authorize us to act as your agent to issue take down notices
            under the DMCA and/or any other similar legislation that allows for
            the submission of requests to Internet service providers and any
            other person involved in the illegal posting for the removal of
            infringing or allegedly infringing copyright materials that are
            contained in or displayed on such service providers platforms and/or
            services.
          </span>
        </p>
        <p className="c1 c11">
          <span className="c6">6.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span className="c6">
            Premium Service, Virtual Goods and Payment Information
          </span>
          <span className="c5">&nbsp;</span>
        </p>
        <p className="c13">
          <span className="c5">
            We currently do not charge a subscription fee, however we reserve
            the right to charge a subscription fee to the use of our Services in
            the future.
          </span>
        </p>
        <p className="c13">
          <span className="c5">&nbsp;</span>
        </p>
        <p className="c0">
          <span className="c5">
            The arqive may change the fees or benefits associated with the
            subscription features from time to time with reasonable advance
            notice; provided, however, that no advance notice will be required
            for temporary promotions, including temporary reductions in the fees
            associated with the subscription features.
          </span>
        </p>
        <p className="c0">
          <span>
            If we do charge a subscription fee or other fees in the future, you
            may submit your debit card, credit card, or other payment
            information ("
          </span>
          <span className="c6">Payment Information</span>
          <span className="c5">
            ") via our Services to purchase subscriptions or other paid products
            or services. We may use third-party service providers to process
            your Payment Information. If you submit your Payment Information,
            you agree to pay all costs that you incur, and you give us
            permission to charge you when payment is due for an amount that
            includes these costs and any applicable taxes and fees. The arqive
            has no control over, and assumes no responsibility for, the content,
            privacy policies, or practices of any third-party websites or
            services.
          </span>
        </p>
        <p className="c1 c11">
          <span className="c6">7.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span className="c7 c6">Site Operations</span>
        </p>
        <p className="c1">
          <span className="c5">
            Our Services are provided from our offices in the United States,
            presently located in Los Angeles, CA and hosted on the web by
            Digital Ocean, LLC. In addition, our third-party service providers
            may process or store your personal information on servers outside
            your country.
          </span>
        </p>
        <p className="c1">
          <span className="c5">
            The arqive makes no representations that the use or the content of
            the Site is appropriate or lawful in territories or jurisdictions
            outside of the United States or that any products are available
            outside of the United States. Use or access of this Site from
            countries or territories where the use of the Site or any of its
            content is illegal, unlawful, or violative of obscenity, privacy, or
            other laws is strictly prohibited. Those who choose to access this
            Site from other countries or territories do so at their own risk and
            such users are solely responsible for compliance with applicable
            local laws and regulations, including but not limited to the General
            Data Protection Regulation (GDPR) for users from the European
            Economic Area.
          </span>
        </p>
        <p className="c1 c11">
          <span className="c6">8.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span className="c7 c6">Indemnity</span>
        </p>
        <p className="c1">
          <span>Ex</span>
          <span className="c4">
            cept to the extent prohibited by law, you agree to defend,
            indemnify, and hold us, our licensors, our third party service
            providers and our officers, employees, licensors, and agents (the “
          </span>
          <span className="c6 c4">The arqive Entities</span>
          <span className="c5 c4">
            ”) harmless, including costs and attorneys’ fees, from and against
            any claim or demand made by any third party due to or arising out of
            (a) your use of the Services, (b) your violation of these Terms, (c)
            your violation of applicable laws or regulations, or (d) Your
            Content. We reserve the right to control the defense of any matter
            for which you are required to indemnify us, and you agree to
            cooperate with our defense of these claims.
          </span>
        </p>
        <p className="c1 c11">
          <span className="c6">9.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span className="c6 c7">Disclaimers</span>
        </p>
        <p className="c1">
          <span className="c6">No Warranty</span>
          <span className="c5">
            . Your use of our Services and any content is solely at your own
            risk and discretion. They are provided to you “as is” and “as
            available”. That means they do not come with any warranty of any
            kind, express or implied. The arqive specifically disclaims any
            implied warranty of merchantability, merchantable quality, fitness
            for a particular purpose, availability, title or non-infringement,
            and any warranties implied by any course of dealing or performance.
          </span>
        </p>
        <p className="c1 c11">
          <span className="c6">10.</span>
          <span className="c2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
          <span className="c7 c6">Limitation of Liability</span>
        </p>
        <p className="c1">
          <span className="c5 c4">
            IN NO EVENT AND UNDER NO THEORY OF LIABILITY, INCLUDING CONTRACT,
            TORT, NEGLIGENCE, STRICT LIABILITY, WARRANTY, OR OTHERWISE, WILL THE
            ARQIVE ENTITIES BE LIABLE TO YOU FOR ANY INDIRECT, CONSEQUENTIAL,
            EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, OR LOST PROFITS
            ARISING FROM OR RELATING TO THESE TERMS OR THE SERVICES, INCLUDING
            THOSE ARISING FROM OR RELATING TO CONTENT MADE AVAILABLE ON THE
            SERVICES THAT IS ALLEGED TO BE DEFAMATORY, OFFENSIVE, OR ILLEGAL.
            ACCESS TO, AND USE OF, THE SERVICES IS AT YOUR OWN DISCRETION AND
            RISK, AND YOU ARE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR DEVICE
            OR COMPUTER SYSTEM, OR LOSS OF DATA RESULTING THEREFROM. IN NO EVENT
            WILL THE AGGREGATE LIABILITY OF THE ARQIVE ENTITIES EXCEED THE
            AMOUNT YOU PAID THE ARQIVE IN THE PREVIOUS SIX MONTHS FOR THE
            SERVICES GIVING RISE TO THE CLAIM. THE LIMITATIONS OF THIS SECTION
            WILL APPLY TO ANY THEORY OF LIABILITY, INCLUDING THOSE BASED ON
            WARRANTY, CONTRACT, STATUTE, TORT (INCLUDING NEGLIGENCE), OR
            OTHERWISE, AND EVEN IF THE ARQIVE ENTITIES HAVE BEEN ADVISED OF THE
            POSSIBILITY OF ANY SUCH DAMAGE, AND EVEN IF ANY REMEDY SET FORTH
            HEREIN IS FOUND TO HAVE FAILED ITS ESSENTIAL PURPOSE. THE FOREGOING
            LIMITATION OF LIABILITY WILL APPLY TO THE FULLEST EXTENT PERMITTED
            BY LAW IN THE APPLICABLE JURISDICTION.
          </span>
        </p>
        <p className="c1 c11">
          <span className="c6">11.</span>
          <span className="c2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
          <span className="c7 c6">Links To Other Websites And Services</span>
        </p>
        <p className="c1">
          <span className="c5">
            To the extent this Site contains links to outside services and
            resources, any concerns regarding such service or resource, or any
            link included on this Site, should be directed to the particular
            outside service or resource. The arqive has no control over, and
            assumes no responsibility for, the content, privacy policies, or
            practices of any third party website or service.
          </span>
        </p>
        <p className="c1">
          <span className="c5">
            You acknowledge and agree that we are not responsible or liable for
            (i) the availability or accuracy of such websites or resources or
            (ii) the content, products, or services on or available from such
            websites or resources. Links to such websites or resources do not
            imply any endorsement by us of such websites or resources or the
            content, products, or services available from such websites or
            resources. You acknowledge sole responsibility for and assume all
            risk arising from your use of any such websites or resources or the
            content, products or services on or available from such websites or
            resources.
          </span>
        </p>
        <p className="c1 c11">
          <span className="c6">12.</span>
          <span className="c2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
          <span id="ContentPolicy" className="c7 c6">Content Policy</span>
        </p>
        <p className="c1">
          <span className="c5">
            You agree that all Content made available publicly or privately,
            will be under the sole responsibility of the person providing the
            said content, or of the person whose user account is used. You agree
            that the Services may expose you to content that may be
            objectionable or offensive. The site editor will not be responsible
            to you in any way for content displayed on the Services, nor for any
            error or omission.
          </span>
        </p>
        <p className="c1">
          <span className="c5">
            By using the Services provided, you explicitly agree that:
          </span>
        </p>
        <p className="c10 c9">
          <span>a.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span className="c5">
            you will not provide any content or conduct yourself in any way that
            may be construed as: unlawful; illegal; threatening; harmful;
            abusive; harassing; stalking; tortious; defamatory; libelous;
            vulgar; obscene; offensive; objectionable; pornographic; designed to
            interfere with or disrupt the operation of this web site or any
            service provided; infected with a virus or other destructive or
            deleterious programming routine; giving rise to civil or criminal
            liability; or in violation of an applicable local, national, or
            international law;
          </span>
        </p>
        <p className="c10 c9">
          <span className="c5">&nbsp;</span>
        </p>
        <p className="c10 c9">
          <span>b.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span className="c5">
            you will not impersonate or misrepresent your association with any
            person or entity; you will not forge or otherwise seek to conceal or
            misrepresent the origin of any content provided by you;
          </span>
        </p>
        <p className="c10 c9">
          <span className="c5">&nbsp;</span>
        </p>
        <p className="c10 c9">
          <span>c.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span className="c5">
            you will not collect or harvest any information about other users;
          </span>
        </p>
        <p className="c9 c10">
          <span className="c5">&nbsp;</span>
        </p>
        <p className="c10 c9">
          <span>d.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span className="c5">
            you will not provide, and you will not use the Services to provide,
            any content or service in any commercial manner, or in any manner
            that would involve junk mail, spam, chain letters, pyramid schemes,
            or any other form of unauthorized advertising or commerce; you will
            not use the Services to promote or operate any service or content
            without the site editor’s prior written consent; and
          </span>
        </p>
        <p className="c10 c9">
          <span className="c5">&nbsp;</span>
        </p>
        <p className="c10 c9">
          <span>e.</span>
          <span className="c2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <span className="c5">
            you will not provide any content that may give rise to the site
            editor being held civilly or criminally liable, or that may be
            considered a violation of any local, national, or international law,
            including — but not limited to — laws relating to copyrights,
            trademarks, patents, or trade secrets.
          </span>
        </p>
        <p className="c10 c11">
          <span className="c5">&nbsp;</span>
        </p>
        <p className="c1 c11">
          <span className="c6">13.</span>
          <span className="c2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
          <span className="c7 c6">Governing Law and Venue</span>
        </p>
        <p className="c0">
          <span className="c5">
            We want you to enjoy The arqive. If you have an issue or dispute,
            you agree to raise it and try to resolve it with us informally. You
            can contact us with feedback and concerns here or by emailing us at:
            info@thearqive.com.
          </span>
        </p>
        <p className="c0">
          <span className="c5">
            Except for the government entities listed below: any claims arising
            out of or relating to these Terms or the Services will be governed
            by the laws of California, without reference to conflict of laws
            rules; all disputes related to these Terms or the Services will be
            brought solely in the federal or state courts located in Los
            Angeles, California; and you consent to personal jurisdiction in
            these courts.
          </span>
        </p>
        <p className="c1 c11">
          <span className="c6">14.</span>
          <span className="c2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
          <span className="c7 c6">Government Entities</span>
        </p>
        <p className="c0">
          <span className="c5">
            If you are a U.S. city, county, or state government entity, then
            this Section 13 does not apply to you.
          </span>
        </p>
        <p className="c0">
          <span className="c5">
            If you are a U.S. federal government entity: any claims arising out
            of or relating to these Terms or the Services will be governed by
            the laws of the United States of America without reference to
            conflict of laws. To the extent permitted by federal law, the laws
            of California (other than its conflict of law rules) will apply in
            the absence of applicable federal law. All disputes related to these
            Terms or the Services will be brought solely in the federal or state
            courts located in Los Angeles, California.
          </span>
        </p>
        <p className="c1 c11">
          <span className="c6">15.</span>
          <span className="c2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
          <span className="c7 c6">Time Limitation On Claims</span>
        </p>
        <p className="c0">
          <span className="c5">
            You agree that any claim you may have arising out of or related to
            your relationship with The arqive, the Site or Services must be
            filed within one (1) year after such claim arose; otherwise, your
            claim shall be deemed permanently barred.
          </span>
        </p>
        <p className="c1 c11">
          <span className="c6">16.</span>
          <span className="c2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
          <span className="c7 c6">Changes to Terms</span>
        </p>
        <p className="c1">
          <span className="c5 c4">
            We may make changes to these Terms from time to time. If we make
            changes, we will post the amended Terms to our Services and update
            the Effective Date above. If the changes, in our sole discretion,
            are material, we may also notify you by sending an email to the
            address associated with your Account or by otherwise providing
            notice through our Services. By continuing to access or use the
            Services on or after the Effective Date of the revised Terms, you
            agree to be bound by the revised Terms. If you do not agree to the
            revised Terms, you must stop accessing and using our Services before
            the changes become effective.
          </span>
        </p>
        <p className="c1 c11">
          <span className="c6">17.</span>
          <span className="c2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
          <span className="c7 c6">Additional Terms</span>
        </p>
        <p className="c10">
          <span>
            Because we offer a variety of Services, you may be asked to agree to
            additional terms before using a specific product or service offered
            by The arqive (“
          </span>
          <span className="c6">Additional Terms</span>
          <span className="c5">
            ”). To the extent any Additional Terms conflict with these Terms,
            the Additional Terms govern with respect to your use of the
            corresponding Service.
          </span>
        </p>
        <p className="c10">
          <span className="c5">&nbsp;</span>
        </p>
        <p className="c0">
          <span className="c5">
            If you use The arqive premium features, you must also agree to our
            Terms for The arqive Premium Features or Current Contest Terms and
            Conditions, respectively.
          </span>
        </p>
        <p className="c1 c11">
          <span className="c6">18.</span>
          <span className="c2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
          <span className="c7 c6">Termination</span>
        </p>
        <p className="c10">
          <span className="c5">
            You may delete your Account and discontinue your use of all
            Services. If you stop using the Services without deactivating your
            Accounts, your Accounts may be deactivated due to prolonged
            inactivity.
          </span>
        </p>
        <p className="c13">
          <span className="c5">&nbsp;</span>
        </p>
        <p className="c0">
          <span>
            We may suspend or terminate your Accounts, status as a moderator, or
            ability to access or use the Services at any time for any or no
            reason, including for a violation of these Terms or our{" "}
          </span>
          <span>
            <a
              className="c12"
              href="#ContentPolicy"
            >
              Content Policy
            </a>
          </span>
          <span className="c5">.</span>
        </p>
        <p className="c0">
          <span className="c5">
            The following sections will survive any termination of these Terms
            or of your Accounts: 2 (Your Rights and Responsibilities), 3 (Things
            You Cannot Do), 4 (Our Right and Responsibilities), 8 (Indemnity), 9
            (Disclaimers), 10 (Limitation of Liability), 12 (Governing Law and
            Venue), 14 (Time Limitation on Claims), 17 (Termination), and 18
            (Miscellaneous).
          </span>
        </p>
        <p className="c1 c11">
          <span className="c6">19.</span>
          <span className="c2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
          <span className="c7 c6">Miscellaneous</span>
        </p>
        <p className="c0 c9">
          <span>a.</span>
          <span className="c2">&nbsp;</span>
          <span className="c5 c4">
            These Terms constitute the entire agreement between you and us
            regarding your access to and use of the Services and shall not be
            modified except by The arqive in accordance with these Terms.
          </span>
        </p>
        <p className="c0 c9">
          <span>b.</span>
          <span className="c2">&nbsp;</span>
          <span className="c5 c4">
            No employee, agent, or other representative of The arqive has any
            authority to bind The arqive with respect to any statement,
            representation, warranty, or other expression not specifically set
            forth in these Terms.
          </span>
        </p>
        <p className="c0 c9">
          <span>c.</span>
          <span className="c2">&nbsp;</span>
          <span className="c5 c4">
            Our failure to exercise or enforce any right or provision of these
            Terms will not operate as a waiver of such right or provision.
          </span>
        </p>
        <p className="c0 c9">
          <span>d.</span>
          <span className="c2">&nbsp;</span>
          <span className="c5 c4">
            If any provision of these Terms is, for any reason, held to be
            illegal, invalid, or unenforceable, the rest of the Terms will
            remain in effect.
          </span>
        </p>
        <p className="c0 c9">
          <span>e.</span>
          <span className="c2">&nbsp;</span>
          <span className="c5 c4">
            You may not assign or transfer any of your rights or obligations
            under these Terms without our consent. We may freely assign these
            Terms.
          </span>
        </p>
        <p className="c0 c9">
          <span>f.</span>
          <span className="c2">&nbsp;</span>
          <span className="c5">
            No agency, partnership, joint venture, or employee-employer
            relationship between The arqive and you or any other person is
            intended or created by these Terms.
          </span>
        </p>
        <p className="c0 c9">
          <span>g.</span>
          <span className="c2">&nbsp;</span>
          <span className="c5">
            All references in these Terms of Use to Sections and other
            subdivisions refer to the Sections and other subdivisions of these
            Terms unless expressly provided otherwise. The word “including”
            shall not be restrictive. The word “or” has the inclusive meaning
            represented by the phrase “and/or.” The words “this Agreement,”
            “herein,” “hereof,” “hereby,” “hereunder” and words of similar
            import refer to these Terms as a whole and not to any particular
            subdivision unless expressly so limited. All headings and captions
            in these Terms are for convenience of reference only and are not
            intended to and shall not define or limit the scope or intent of any
            provision of these Terms.
          </span>
        </p>
        <p className="c8">
          <span className="c5" />
        </p>
        <p className="c8">
          <span className="c5" />
        </p>
        <p className="c8">
          <span className="c5" />
        </p>
        <p className="c8">
          <span className="c5" />
        </p>
      </>
    </div>
  );
}

export default Terms;
