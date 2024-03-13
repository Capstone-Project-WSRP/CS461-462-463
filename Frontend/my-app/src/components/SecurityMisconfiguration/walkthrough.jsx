const wt_html = `
<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=utf-8">
<meta name=Generator content="Microsoft Word 15 (filtered)">
<style>
<!--
 /* Font Definitions */
 @font-face
\t{font-family:"Cambria Math";
\tpanose-1:2 4 5 3 5 4 6 3 2 4;}
@font-face
\t{font-family:Aptos;
\tpanose-1:2 11 0 4 2 2 2 2 2 4;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
\t{margin:0in;
\tfont-size:12.0pt;
\tfont-family:"Aptos",sans-serif;}
a:link, span.MsoHyperlink
\t{color:#467886;
\ttext-decoration:underline;}
p.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph
\t{margin-top:0in;
\tmargin-right:4in;
\tmargin-bottom:0in;
\tmargin-left:.5in;
\tfont-size:12.0pt;
\tfont-family:"Aptos",sans-serif;}
p.MsoListParagraphCxSpFirst, li.MsoListParagraphCxSpFirst, div.MsoListParagraphCxSpFirst
\t{margin-top:0in;
\tmargin-right:4in;
\tmargin-bottom:0in;
\tmargin-left:.5in;
\tfont-size:12.0pt;
\tfont-family:"Aptos",sans-serif;}
p.MsoListParagraphCxSpMiddle, li.MsoListParagraphCxSpMiddle, div.MsoListParagraphCxSpMiddle
\t{margin-top:0in;
\tmargin-right:4in;
\tmargin-bottom:0in;
\tmargin-left:.5in;
\tfont-size:12.0pt;
\tfont-family:"Aptos",sans-serif;}
p.MsoListParagraphCxSpLast, li.MsoListParagraphCxSpLast, div.MsoListParagraphCxSpLast
\t{margin-top:0in;
\tmargin-right:4in;
\tmargin-bottom:0in;
\tmargin-left:.5in;
\tfont-size:12.0pt;
\tfont-family:"Aptos",sans-serif;}
@page WordSection1
\t{size:8.5in 11.0in;
\tmargin:1.0in 1.0in 1.0in 1.0in;}
div.WordSection1
\t{page:WordSection1;}
 /* List Definitions */
 ol
\t{margin-bottom:0in;}
ul
\t{margin-bottom:0in;}
-->
</style>

</head>

<body lang=EN-US link="#467886" vlink="#96607D" style='word-wrap:break-word'>

<div class=WordSection1>

<p class=MsoNormal style='margin-left:.5in;text-indent:-.25in'><b>Preliminary
Work</b></p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'>1.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>The testing application Postman is needed for this walkthrough. A web
version is offered, or you may download the desktop application. All versions can
be found <a href="https://www.postman.com/downloads/">here</a>. For the sake of
this walkthrough, the web version will be used and referenced, as no downloads
are needed.</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'>2.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>First, you must create a Workspace in Postman.  Existing Workspaces and Workspace
creation can be found in the top-left of the task bar, shown below (all points
of interest in this walkthrough will be outlined). You may choose to create a
blank workspace and name it whatever you would like.</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle><img border=0 width=468 height=244
id="Picture 1" src="SM_walkthrough_files/fig1.png"></p>

<p class=MsoListParagraphCxSpMiddle><i>Fig 1.1 – Workspace Creation</i></p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'>3.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>Next, you will need to create an Environment. This can Be done by selecting
“Environments” [1] in the left toolbar, and then selecting the “+” button [2]. </p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle><img border=0 width=340 height=110
id="Picture 5" src="SM_walkthrough_files/fig2.png"></p>

<p class=MsoListParagraphCxSpMiddle><i>Fig 1.2 – Environment Creation</i></p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'>4.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>After creating an environment, you will need to set one environment
variable as shown below.</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle><img border=0 width=561.6 height=207.6
id="Picture 6" src="SM_walkthrough_files/fig3.png"
alt="A screenshot of a computer&#10;&#10;Description automatically generated"></p>

<p class=MsoListParagraphCxSpMiddle><i>Fig 1.3 – Setting your environment
variable</i></p>

<p class=MsoListParagraphCxSpMiddle align=center style='text-align:center'>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle>Please enter the Variable, Initial Value,
and Current Value as displayed in Figure 1.3. The Type should automatically be
set to “default,” which is fine. Don’t forget to save after entering in your
environment variable’s information! This can be accomplished with either the
save button in the top right corner, or simply with ctrl + s.</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'>5.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>Lastly, you need to create your test collection, where we will be
creating a few tests that may or may not reveal some sensitive information.
Similar to creating an Environment, you will want to select “Collections” [1]
from the left toolbar, and then click the “+” button [2] to create your new Collection.
You may select “Blank Collection” and once again name it as you please.</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle><img border=0 width=384 height=163.5
id="Picture 7" src="SM_walkthrough_files/fig4.png"
alt="A screenshot of a phone&#10;&#10;Description automatically generated"></p>

<p class=MsoListParagraphCxSpLast>&nbsp;</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal><b>Exploit the Security Misconfiguration Vulnerability</b></p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'>1.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>You are finished with your preliminary Postman setup and are ready to
begin the attack! To start, you will navigate to the section above titled “Perform
an attack.” Please read through the bulleted points, and don’t forget to reset
the database first! The “Reset Database” button can be found in the bottom-left
corner of the web page, in the footer.</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'>2.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>After navigating to the “Perform an attack” section and resetting the
database, you will start by adding a user to our database. This can be
accomplished by clicking the “Add User” button.</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle><img border=0 width=312 height=190.5
id="Picture 8" src="SM_walkthrough_files/fig5.png"
alt="A screenshot of a computer error message&#10;&#10;Description automatically generated"></p>

<p class=MsoListParagraphCxSpMiddle><i>Fig 2.1 – “Add User” button to create
user in database</i></p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'>3.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>Upon clicking the “Add User” button, a pop-up will appear. Let’s add a
new user to our database by typing the following into the pop-up and submitting
the form:</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle><img border=0 width=220.5 height=300
id="Picture 9" src="SM_walkthrough_files/fig6.png"></p>

<p class=MsoListParagraphCxSpMiddle><i>Fig 2.2 – Adding a new user</i></p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle>Upon submitting the form, you should see an
alert with a success message.</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle><img border=0 width=406.5 height=120
id="Picture 10" src="SM_walkthrough_files/fig7.png"></p>

<p class=MsoListParagraphCxSpMiddle><i>Fig 2.3 – User creation was successful</i></p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'>4.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>Great work! Since we are trying to exploit a vulnerability, let’s see
what happens if we try to create a user who is already in our database. When
you reset the database at the beginning, it was populated with a few users. One
email that exists in our database is <a href="mailto:alice@example.com">alice@example.com</a>,
let’s give that one a try. Note: The name and password can be anything, as the
account is tied to the unique email address.</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle><img border=0 width=219 height=300
id="Picture 11" src="SM_walkthrough_files/fig8.png"
alt="A screenshot of a login screen&#10;&#10;Description automatically generated"></p>

<p class=MsoListParagraphCxSpMiddle><i>Fig 2.4 – Attempting to create a user
with an email that is already registered</i></p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle><img border=0 width=331.5 height=96
id="Picture 12" src="SM_walkthrough_files/fig9.png"
alt="A black background with white text&#10;&#10;Description automatically generated"></p>

<p class=MsoListParagraphCxSpMiddle><i>Fig 2.5 – User creation failed</i></p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle>This time, our user creation failed, which
is to be expected. Our database of users is designed so that exactly one
account may be created per unique email. There may be another way to find the
sensitive information we are looking for. Let’s try our luck with Postman.</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpLast>&nbsp;</p>

<p class=MsoNormal><b>Looking for More Information Using Postman</b></p>

<p class=MsoListParagraphCxSpFirst style='text-indent:-.25in'>1.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>Bring Postman back up. Now that we have our environment and collection
created from the “Preliminary Work” section of this walkthrough, we need to make
some requests! From the “Collections” tab that we were most recently on within
Postman, find the collection that you created. In the example below, ours is
called “Capstone.” Select the three dots to the right of your collection and
click on “Add Request.”</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle><img border=0 width=328.5 height=63
id="Picture 13" src="SM_walkthrough_files/fig10.png"
alt="A black screen with white text&#10;&#10;Description automatically generated"></p>

<p class=MsoListParagraphCxSpMiddle><i>Fig 3.1 – “More Actions” symbol for Capstone
Collection</i></p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'>2.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>Next, we will enter in a series of information to create our request to
send to the server. Please refer to the image below for guidance.</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle><img border=0 width=702 height=304.5
id="Picture 14" src="SM_walkthrough_files/fig11.png"
alt="A screenshot of a computer&#10;&#10;Description automatically generated"></p>

<p class=MsoListParagraphCxSpMiddle><i>Fig 3.2 – Outlined components that must
be entered to create a request</i></p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle>First, please make sure that you have
selected to use the environment that you created earlier. This can be found in
a drop-down, in the top-right corner [1].</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle>Since we will be attempting to send
information to be added to a database, we will be creating a POST request. There
is a drop-down with request types on the left side of the screen, next to where
we will enter the URL. Please select “POST” [2].</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle>Next, we need to enter the endpoint to
which we are sending our request. In Postman, environment variables can be used
if they are enclosed in double-curly braces “{{ }}”. We already created the “app_url”
environment variable in our preliminary work earlier. Enter the endpoint as “{{app_url}}/sm_insecure_creation”
[3].</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle>In order to send a request, we need to have
content within our request body. Select the “Body” tab below the endpoint
address [4].</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle>Next, you need to ensure the data is being
sent in a manner that the server is expecting. Please select the “raw” radio
button, and ensure the raw data is in JSON format from the drop-down to the
right of the radio buttons [5].</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle>Lastly, we need to enter our data in the
request body. Since we are using a JSON format, we will be entering the data in
key:value pairs, all enclosed in curly braces. The keys and values must be of
string type. The keys used are the same as the “Create User” form fields from
our web application, “name”, “email”, and “password”. Please go ahead and enter
any mock values for these keys, so long as you have not already used the email
value. We want this request to be a success [6].</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle>Please remember to save (“ctrl + s” will
work), and hit that big, blue “Send” button!</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'>3.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>Great! Your results should be as shown below. We received the response
from the server. The response status code is a “201 CREATED,” which indicates
that we were able to successfully add a user to our database [1]. The response
body is shown under our request. You can see the success message that appeared in
the alert pop-up upon successful user creation on our web application from
earlier [2]</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle><img border=0 width=505.5 height=433.5
id="Picture 15" src="SM_walkthrough_files/fig12.png"></p>

<p class=MsoListParagraphCxSpMiddle><i>Fig 3.3 – Response body upon successful
user creation</i></p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'>4.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>Let’s see what happens when we try to create a user using an existing email
again, this time making our request in Postman. You will need to create a new
request for this. Follow the previous steps outlined in bullet point #2 above,
except this time we will use an email that has already been used to create a
user in our database. alice@example.com is always a great email address to use
if you want to guarantee user creation failure. Figure 3.4 is provided below
with all the correct information for our request if you need to reference it.</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle><img border=0 width=702 height=337.5
id="Picture 16" src="SM_walkthrough_files/fig13.png"
alt="A screenshot of a computer&#10;&#10;Description automatically generated"></p>

<p class=MsoListParagraphCxSpMiddle><i>Fig 3.4 – POST request that will result
in failure to add user</i></p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle style='text-indent:-.25in'>5.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>We’ve discovered something! Fortunately for us as attackers, the
developers of this insecure web application have made a mistake. While using
the web application, no sensitive data is revealed so the developers thought
their data was secure. Unfortunately, they did not take precautions against
security misconfigurations, and mistakenly included sensitive information in
their server’s response body.</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle><img border=0 width=702 height=186
id="Picture 17" src="SM_walkthrough_files/fig14.png"
alt="A screenshot of a computer&#10;&#10;Description automatically generated"></p>

<p class=MsoListParagraphCxSpMiddle><i>Fig 3.5 – Revealing response body due to
security misconfigurations</i></p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle>The “message” key within the response body shows
the same alert we received in the web application itself when we tried to add a
user using an existing email. However, there is also data associated with a “debug_error_message”
key in the response body. The developers misconfigured how to handle errors in
their programs. The first problem is returning a response status code of “200
OK” when it should have likely been a “409 CONFLICT” response status code. With
the proper response status code, the developers’ code may have executed
differently, sending a different response that may not have contained sensitive
information.</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpMiddle>Additionally, sensitive data and/or PII
(personal identifiable information) should <i>never</i> be returned in any way.
It seems as though the developers had good intentions; maybe they meant “debug_error_message”
as a developer-facing error only which might help them debug problems, and
thought they were safe since the information did not show up in the user-facing
web application itself. However, malicious agents possess more knowledge than
the general public on exploiting weaknesses, and are able to find sensitive
information in ways an average user may not, outside of the GUI that most users
are working with.</p>

<p class=MsoListParagraphCxSpMiddle>&nbsp;</p>

<p class=MsoListParagraphCxSpLast>Poor Alice’s credentials are now revealed,
and their account may be accessed and abused! Alice is just a standard user, so
hopefully the effects of exploiting this information will be minimal and
contained to their account. While business may not be directly affected by
this, Alice may now be in distress, and if multiple user’s information is
leaked then this will certainly have great impacts on business. To make matters
worse, admin information may also be exploited in a similar matter which would
be extremely detrimental. With admin credentials, the level of destruction that
a malicious agent may cause could be endless.<br><br><br><br></p>


</div>

</body>

</html>
`

function SMwalkthrough() {
    return (
      <div dangerouslySetInnerHTML={{ __html: wt_html }} />
    );
  }

  export default SMwalkthrough