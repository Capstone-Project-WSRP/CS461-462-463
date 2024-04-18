<<<<<<< HEAD
=======

>>>>>>> main
const htmlFile = `
<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1252">
<meta name=Generator content="Microsoft Word 15 (filtered)">
<style>
<!--
 /* Font Definitions */
 @font-face
	{font-family:Wingdings;
	panose-1:5 0 0 0 0 0 0 0 0 0;}
@font-face
	{font-family:"Cambria Math";
	panose-1:2 4 5 3 5 4 6 3 2 4;}
@font-face
	{font-family:Aptos;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	line-height:106%;
	font-size:11.0pt;
	font-family:"Aptos",sans-serif;}
a:link, span.MsoHyperlink
	{color:#467886;
	text-decoration:underline;}
p.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:.5in;
	line-height:106%;
	font-size:11.0pt;
	font-family:"Aptos",sans-serif;}
p.MsoListParagraphCxSpFirst, li.MsoListParagraphCxSpFirst, div.MsoListParagraphCxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	line-height:106%;
	font-size:11.0pt;
	font-family:"Aptos",sans-serif;}
p.MsoListParagraphCxSpMiddle, li.MsoListParagraphCxSpMiddle, div.MsoListParagraphCxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	line-height:106%;
	font-size:11.0pt;
	font-family:"Aptos",sans-serif;}
p.MsoListParagraphCxSpLast, li.MsoListParagraphCxSpLast, div.MsoListParagraphCxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:.5in;
	line-height:106%;
	font-size:11.0pt;
	font-family:"Aptos",sans-serif;}
.MsoChpDefault
	{font-size:10.0pt;}
@page WordSection1
	{size:8.5in 11.0in;
	margin:1.0in 1.0in 1.0in 1.0in;}
div.WordSection1
	{page:WordSection1;}
 /* List Definitions */
 ol
	{margin-bottom:0in;}
ul
	{margin-bottom:0in;}
-->
</style>

</head>

<body lang=EN-US link="#467886" vlink="#96607D" style='word-wrap:break-word'>

<div class=WordSection1>

<p class=MsoNormal><b><u>I. Introduction</u></b></p>

<p class=MsoNormal style='margin-left:.5in'>Access control is a fundamental
element of cybersecurity that grants or restricts a user's ability to interact with
a system's resources. It operates as a gatekeeper, ensuring that only
authorized individuals or processes can access specific data, files, or
functionalities. However, when flaws occur in the implementation of these
controls, the result is broken access control. This significant vulnerability
paves the way for unauthorized actors to gain access to sensitive information
or manipulate system behavior.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal><b><u>II. Understanding Broken Access Control</u></b></p>

<p class=MsoNormal style='margin-left:.5in'>Broken access control arises when
users are able to exceed the boundaries of their intended permissions. This can
manifest in various ways, including:</p>

<p class=MsoNormal style='margin-left:.75in;text-indent:-.25in'><span
style='font-size:10.0pt;line-height:106%'>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>Direct object references:</b>&nbsp;Files or data objects
accessible by simply changing a parameter in the URL.</p>

<p class=MsoNormal style='margin-left:.75in;text-indent:-.25in'><span
style='font-size:10.0pt;line-height:106%'>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>Privilege escalation:</b>&nbsp;A low-privilege user gains
access to higher-level functions or data.</p>

<p class=MsoNormal style='margin-left:.75in;text-indent:-.25in'><span
style='font-size:10.0pt;line-height:106%'>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>Modification of metadata:</b>&nbsp;Altering metadata to
manipulate how access to resources is granted.</p>

<p class=MsoNormal style='margin-left:.75in;text-indent:-.25in'><span
style='font-size:10.0pt;line-height:106%'>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>Failure to restrict session IDs:</b>&nbsp;This permits users
to impersonate others by hijacking active sessions.</p>

<p class=MsoNormal style='margin-left:.5in'>&nbsp;</p>

<p class=MsoNormal><b><u>III. The Impact of Broken Access Control</u></b></p>

<p class=MsoNormal style='margin-left:.5in'>The consequences of broken access
control are severe. Security breaches become far more likely, potentially
leading to:</p>

<p class=MsoNormal style='margin-left:.75in;text-indent:-.25in'><span
style='font-size:10.0pt;line-height:106%'>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>Data exposure and theft:</b>&nbsp;Unauthorized parties can
steal sensitive information, compromising the privacy of individuals.</p>

<p class=MsoNormal style='margin-left:.75in;text-indent:-.25in'><span
style='font-size:10.0pt;line-height:106%'>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>Modification of data:</b>&nbsp;Data integrity is damaged as
attackers tamper with records.</p>

<p class=MsoNormal style='margin-left:.75in;text-indent:-.25in'><span
style='font-size:10.0pt;line-height:106%'>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>Disruption of operations:</b>&nbsp;Attackers may be able to
exploit system functions for malicious purposes, hindering business operations.</p>

<p class=MsoNormal style='margin-left:.75in;text-indent:-.25in'><span
style='font-size:10.0pt;line-height:106%'>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>Financial and reputational harm:</b>&nbsp;Organizations face
financial penalties, lawsuits, and loss of public trust due to these breaches.</p>

<p class=MsoNormal style='margin-left:.5in'>&nbsp;</p>

<p class=MsoNormal><b><u>IV. Identifying and Preventing Broken Access Control</u></b></p>

<p class=MsoNormal style='margin-left:.5in'>To combat broken access control,
organizations must prioritize the following:</p>

<p class=MsoNormal style='margin-left:.75in;text-indent:-.25in'><span
style='font-size:10.0pt;line-height:106%'>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>Detection:</b>&nbsp;Vulnerability scanners and penetration
testing reveal broken access control issues.</p>

<p class=MsoNormal style='margin-left:.75in;text-indent:-.25in'><span
style='font-size:10.0pt;line-height:106%'>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>Robust policies:</b>&nbsp;Enforce least-privilege access,
ensuring users get only what they need.</p>

<p class=MsoNormal style='margin-left:.75in;text-indent:-.25in'><span
style='font-size:10.0pt;line-height:106%'>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>Security audits:</b>&nbsp;Regular reviews expose
misconfigurations or weaknesses in controls.</p>

<p class=MsoNormal style='margin-left:.75in;text-indent:-.25in'><span
style='font-size:10.0pt;line-height:106%'>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><b>Developer education:</b>&nbsp;Security training for developers
reduces the likelihood of introducing these flaws during development.</p>

<p class=MsoNormal style='margin-left:.5in'>&nbsp;</p>

<p class=MsoNormal><b><u>V. Case Studies</u></b></p>

<p class=MsoNormal style='margin-left:.75in;text-indent:-.25in'>1.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><b>SnapChat
, Data Breach (Jan 2014):</b></p>

<p class=MsoNormal style='margin-left:1.25in;text-indent:-.25in'>a.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>&nbsp;<a
href="https://gibsonsec.org/snapchat/" target="_self">Gibson Security</a>&nbsp;detailed
vulnerabilities in the snapchat service, which was dismissed as a purely
theoretical attack. A week later, brute force enumeration had revealed 4.6
million usernames and phone numbers.</p>

<p class=MsoNormal style='margin-left:1.25in;text-indent:-.25in'>b.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Why
was this significant?</p>

<p class=MsoListParagraph style='margin-left:1.75in;text-indent:-1.75in'><span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>i.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>The attack seems to be motivated at least partly by Snapchat�s assertion
that the attack was theoretical, and they had not taken any action. This
resulted in the data leakage of phone numbers and user�s details that could be
valuable for various uses.</p>

<p class=MsoNormal style='margin-left:1.25in'>&nbsp;</p>

<p class=MsoNormal style='margin-left:.75in;text-indent:-.25in'><b>2.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b>Facebook
Business Pages, Attack (2015):</b></p>

<p class=MsoNormal style='margin-left:1.25in;text-indent:-.25in'>a.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><b>&nbsp;</b><a
href="https://www.7xter.com/2015/08/hacking-facebook-pages.html" target="_self">Laxman
Muthiyah</a>&nbsp;found that it was possible for a malicious user to use a
request to assign admin permissions to himself for a particular Facebook page.
A sample request can be seen below:</p>

<p class=MsoNormal style='margin-left:1.25in;text-indent:-.25in'>b.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Request
:-</p>

<p class=MsoListParagraphCxSpFirst style='margin-left:1.75in;text-indent:-1.75in'><span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>i.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>POST /&lt;page_id&gt;/userpermissions HTTP/1.1</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.75in;text-indent:-1.75in'><span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>ii.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>Host : graph.facebook.com</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.75in;text-indent:-1.75in'><span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>iii.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>Content-Length: 245</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.75in;text-indent:-1.75in'><span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>iv.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>role=MANAGER&amp;user=&lt;target_user_id&gt;&amp;business=&lt;associated_business_id&gt;&amp;access_token=&lt;application_access_token&gt;</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.75in;text-indent:-1.75in'><span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>v.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>Response :-</p>

<p class=MsoListParagraphCxSpLast style='margin-left:1.75in;text-indent:-1.75in'><span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>vi.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>true</p>

<p class=MsoNormal style='margin-left:1.25in;text-indent:-.25in'>c.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><i>Why
was this significant?</i></p>

<p class=MsoListParagraph style='margin-left:1.75in;text-indent:-1.75in'><span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>i.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span>Business pages are a widely used function, and by executing this attack,
a malicious user could add himself as an administrator and deny access to the
actual manager or administrator.</p>

<p class=MsoNormal style='margin-left:1.0in'>&nbsp;</p>

<p class=MsoNormal><b><u>VI. Conclusion</u></b></p>

<p class=MsoNormal style='margin-left:.5in'>Broken access control exemplifies a
pervasive cybersecurity threat, undermining the integrity and confidentiality
of systems. By understanding its mechanisms, organizations can establish
effective safeguards. Constant vigilance in detecting vulnerabilities,
implementing robust preventative measures, and gleaning insights from past
breaches are crucial to bolstering security. In an increasingly digitized
world, prioritizing robust access control is not an option; it's a necessity.</p>

<p class=MsoNormal>&nbsp;</p>

</div>

</body>

</html>


`;


<<<<<<< HEAD
function BACdescription() {
=======
function BACdecription() {
>>>>>>> main
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlFile }} />
    );
  }

<<<<<<< HEAD
  export default BACdescription
=======
  export default BACdecription
>>>>>>> main
