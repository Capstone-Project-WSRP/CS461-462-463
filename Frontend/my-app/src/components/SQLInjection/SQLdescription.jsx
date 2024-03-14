const SQLdescFile = `
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
	margin-right:4in;
	margin-bottom:8.0pt;
	margin-left:0in;
	line-height:106%;
	font-size:11.0pt;
	font-family:"Aptos",sans-serif;}
a:link, span.MsoHyperlink
	{color:#467886;}
p.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph
	{margin-top:0in;
	margin-right:4in;
	margin-bottom:8.0pt;
	margin-left:.5in;
	line-height:106%;
	font-size:11.0pt;
	font-family:"Aptos",sans-serif;}
p.MsoListParagraphCxSpFirst, li.MsoListParagraphCxSpFirst, div.MsoListParagraphCxSpFirst
	{margin-top:0in;
	margin-right:4in;
	margin-bottom:0in;
	margin-left:.5in;
	line-height:106%;
	font-size:11.0pt;
	font-family:"Aptos",sans-serif;}
p.MsoListParagraphCxSpMiddle, li.MsoListParagraphCxSpMiddle, div.MsoListParagraphCxSpMiddle
	{margin-top:0in;
	margin-right:4in;
	margin-bottom:0in;
	margin-left:.5in;
	line-height:106%;
	font-size:11.0pt;
	font-family:"Aptos",sans-serif;}
p.MsoListParagraphCxSpLast, li.MsoListParagraphCxSpLast, div.MsoListParagraphCxSpLast
	{margin-top:0in;
	margin-right:4in;
	margin-bottom:8.0pt;
	margin-left:.5in;
	line-height:106%;
	font-size:11.0pt;
	font-family:"Aptos",sans-serif;}
.MsoChpDefault
	{font-size:10.0pt;}
@page WordSection1
	{size:8.5in 11.0in;
	margin:2.0in 2.0in 2.0in 2.0in;}
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

<body lang=EN-US style='word-wrap:break-word'>

<div class=WordSection1>

<p class=MsoNormal><u>I. Introduction</u></p>

<p class=MsoListParagraphCxSpFirst style='margin-left:.5in'>
A Structured Query Language (SQL) is a computer language that is used to manage data in a relational 
database management system, which has pretty wide-spread usage in today’s climate. SQL injection uses these 
SQL statements to create invalid data which will be passed to the database, usually by entering specific 
key phrases or unique symbols into the application’s input, in a way that will allow the user to 
introduce or change the execution process of the program.
</p></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:.5in'>Due to this, it
is extremely important as developers to ensure we are utilizing secure
practices in our daily work. Further examples of SQL injections and
their implications are discussed in more detail below.</p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:.5in'>&nbsp;</p>

<p class=MsoListParagraphCxSpLast style='margin-left:.5in'>&nbsp;</p>

<p class=MsoNormal><u>II. Understanding SQL Injections</u></p>

<p class=MsoNormal style='margin-left:.5in'>SQL Injections can
manifest in various forms, including:</p>

<p class=MsoListParagraphCxSpFirst style='margin-left:1.0in;text-indent:-.25in'>1.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><b>Poor Filtration</b>: Lacks a system to regulate what kind of values a 
user is allowed to input into a text prompt.</p></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.0in;text-indent:-.25in'>2.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><b>Poor Validation</b>: Lacks a system to authorize those who are allowed to have 
direct access to the server of the database.</p></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.0in;text-indent:-.25in'>3.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><b>Poor Sanitation</b>: Lacks a system to regulate what kind of data 
or information is being passed into the database.</p></p>

<p class=MsoListParagraphCxSpLast style='margin-left:1.0in;text-indent:-.25in'>4.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><b>Too Much Trust</b>: In other words, when the application is placing 
too much trust in the data that the user has inputted to the database.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal><u>III. The Impact of SQL Injections</u></p>

<p class=MsoNormal style='margin-left:.5in'>SQL injections can
have significant impacts on the security posture of an application or system,
leading to various consequences, including:</p>

<p class=MsoListParagraphCxSpFirst style='margin-left:1.0in;text-indent:-.25in'>1.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><b>Data Modification</b>: SQL injections may allow the attacker to modify 
or delete data entries within the database, potentially causing data corruption/loss
or unauthorized changes to the application's behavior.</p></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.0in;text-indent:-.25in'>2.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><b>Unauthorized Data Access</b>: Attackers can exploit SQL injection vulnerabilities
to access sensitive data stored in a database, including user credentials, personal 
information, financial records, and more.</p></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:1.0in;text-indent:-.25in'>3.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><b>Denial of Service (DoS)</b>: Attackers may exploit SQL injections to perform DoS
attacks by executing resource-intensive SQL queries that consume system resources and 
degrade the performance or availability of the application or database server.</p></p>

<p class=MsoListParagraphCxSpLast style='margin-left:1.0in;text-indent:-.25in'>4.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><b>Reputational Hit</b>: Since SQL injections can directly lead to things like data breaches 
and the like, this could cause some serious financial, reputational, and competitive loss to
any corporation or organization affected by this form of attack.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal><u>IV. Identifying and Preventing SQL Injections</u></p>

<p class=MsoListParagraphCxSpFirst style='margin-left:76.5pt;text-indent:-.25in'>1.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><b>Parameterized Queries:</b> Instead of dynamically constructing SQL queries by concatenating strings,
use parameterized queries or prepared statements to separate SQL code from user input.</p></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:76.5pt;text-indent:-.25in'>2.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><b>Input Validation and Sanitization:</b> Validate and sanitize all user-supplied input
before using it in SQL queries and ensure that input adheres to expected formats, such as only 
allowing alphanumeric characters or specific patterns.</p></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:76.5pt;text-indent:-.25in'>3.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><b>Least Privilege Principle:</b> Limit the privileges of the database user account used by
the application by assigning minimal permissions necessary for the app to function correctly and 
avoid using administrative accounts for regular application operations. All of this is 
to prevent a user from accessing certain parts of the database via SQL injections
due to poor authorization.</p></p>

<p class=MsoListParagraphCxSpLast style='margin-left:76.5pt;text-indent:-.25in'>4.<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><b>Escape User Input:</b> A simple and rudimentary way of preventing SQL injections is to
escape user input, like quotes and semicolons, before incorporating it into SQL queries. 
This will at least ensure that those special characters are treated as literal values
rather than executable SQL statements, but this way is susceptible to programming errors 
and SQL structures cannot be escaped.</p>

<p class=MsoNormal style='margin-left:.25in;text-indent:.5in'>&nbsp;</p>

<p class=MsoNormal><u>V. Case Studies</u></p>

<p class=MsoNormal style='margin-left:.25in;text-indent:.5in'>1. TODO </p>

<p class=MsoNormal style='margin-left:.25in;text-indent:.5in'>&nbsp;</p>

<p class=MsoNormal><u>VI. Conclusion</u></p>

<p class=MsoNormal style='margin-left:.5in; margin-right: 4in'>
SQL injections are a pretty simple and preventable form of attack. Most of the time,
it is usually litmus test of how much a given organiation values their cybersecurity 
efforts. It still doesn't change the fact that SQL injections are one of the 
most prolific and common forms of attack against websites, due primarily to the relative simplicity 
of the attack itself. As long as you know how to write in SQL, any person can do it. The potential rewards 
of this attack more often than not outweigh the time it takes to implement it, especially if the 
website being targeted is primitive in its implementation. Real damage could still be inflicted 
if those in charge, either out of negligence or inexperience, ignore this form of vulnerability.</p></p>

<p class=MsoNormal>&nbsp;</p>

</div>

</body>

</html>

`;

function SQLdescription() {
    return (
      <div dangerouslySetInnerHTML={{ __html: SQLdescFile }} />
    );
  }

  export default SQLdescription