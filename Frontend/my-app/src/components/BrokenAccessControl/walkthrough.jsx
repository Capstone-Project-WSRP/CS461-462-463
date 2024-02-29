const htmlFile = `

<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1252">
<meta name=Generator content="Microsoft Word 15 (filtered)">
<style>
<!--
 /* Font Definitions */
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
	line-height:105%;
	font-size:11.0pt;
	font-family:"Aptos",sans-serif;}
a:link, span.MsoHyperlink
	{color:#467886;
	text-decoration:underline;}
.MsoChpDefault
	{font-size:10.0pt;}
.MsoPapDefault
	{margin-bottom:8.0pt;
	line-height:105%;}
@page WordSection1
	{size:8.5in 11.0in;
	margin:1.0in 1.0in 1.0in 1.0in;}
div.WordSection1
	{page:WordSection1;}
-->
</style>

</head>

<body lang=EN-US link="#467886" vlink="#96607D" style='word-wrap:break-word'>

<div class=WordSection1>

<p class=MsoNormal>These are the step that you will need to follow to perform
this vulnerability.</p>

<p class=MsoNormal>First you will need to install <a
href="https://portswigger.net/burp/communitydownload">Burp Suite Community
edition</a>. </p>

<p class=MsoNormal>Next, we will need to find some email addresses to be able
to try and break some passwords.</p>

<p class=MsoNormal>These may have already been found by doing some of the other
lessons. If not here are 2 provided emails. </p>

<p class=MsoNormal><a href="mailto:Alice@example.com">Alice@example.com</a></p>

<p class=MsoNormal><a href="mailto:Bob@example..com">Bob@example..com</a></p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>Launch Burp Suite:</p>

<p class=MsoNormal>Fill this out if you would like or just click next. <br>
<img border=0 width=345 height=263
src="/walkthrough_files/image001.jpg"
alt="A screenshot of a computer&#10;&#10;Description automatically generated"></p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>In the next screen we will just use the defaults.<br>
<img border=0 width=368 height=282
src="/walkthrough_files/image002.jpg"
alt="A screenshot of a computer&#10;&#10;Description automatically generated"></p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>Next you will want to click Proxy:<br>
<img border=0 width=407 height=237
src="/walkthrough_files/image003.jpg"
alt="A screenshot of a computer&#10;&#10;Description automatically generated"></p>

<p class=MsoNormal>Then open a browser and navigate to the webapp.</p>

<p class=MsoNormal style='margin-bottom:12.0pt'><img border=0 width=624
height=253 src="/walkthrough_files/image004.jpg"
alt="A screenshot of a computer&#10;&#10;Description automatically generated"><br>
<br>
Click back to target:<br>
<img border=0 width=627 height=321
src="/walkthrough_files/image005.jpg"
alt="A screenshot of a computer&#10;&#10;Description automatically generated"><br>
<br>
Back in the webapp put in some random values for an&nbsp; email and password. <br>
<img border=0 width=624 height=202
src="/walkthrough_files/image006.jpg"
alt="A screen shot of a computer&#10;&#10;Description automatically generated"><br>
<br>
Now we will want to open Devloper tools in the web browser. Right click on the
web page and go down to inspect and then click on the network tab. <br>
<img border=0 width=624 height=197
src="/walkthrough_files/image007.jpg"
alt="A screenshot of a computer&#10;&#10;Description automatically generated"><br>
<br>
Then click search, you should see something like this in the network tab now.
We want to see how the url is constructed for the backend. With this knowledge
we can now use Burp Suite to brute force the passwords. <br>
<img border=0 width=625 height=341
src="/Walkthrough_files/image008.jpg"
alt="A screenshot of a computer&#10;&#10;Description automatically generated"><br>
<br>
Back in Burp Suite in the target tab you want to go down the left side to the
backend (localhost:5000 for me). Go under user_search and then right click on
the URL and send to intruder. <br>
<img border=0 width=625 height=325
src="/Walkthrough_files/image009.jpg"
alt="A screenshot of a computer&#10;&#10;Description automatically generated"><br>
<br>
Now with intruder&nbsp; open you need to make sure the URL looks like one in
network tab on the browser devtools.<br>
<img border=0 width=624 height=263
src="/Walkthrough_files/image010.jpg"
alt="A screenshot of a computer&#10;&#10;Description automatically generated"><br>
<br>
Now, highlight $password$ and click the add button<br>
<br>
<img border=0 width=624 height=261
src="/Walkthrough_files/image011.jpg"
alt="A screenshot of a computer&#10;&#10;Description automatically generated"><br>
<br>
Next, click Payloads. In this section you can add custom payloads, use ones
provided by Burp Suite (not in the community edition), or you can download and
add word list you can find on the internet. We will just use a short list that
we will put in, as this can run for a long time otherwise. <br>
*Note: Alice's password is 'Alice1234' and Bob's is 'Bob1234'<br>
<img border=0 width=624 height=339
src="/Walkthrough_files/image012.jpg"
alt="A screenshot of a computer&#10;&#10;Description automatically generated"><br>
<br>
Click start attack!</p>

</div>

</body>

</html>

`


function BACdecription() {
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlFile }} />
    );
  }

  export default BACdecription