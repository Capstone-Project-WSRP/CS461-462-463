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
@font-face
	{font-family:Consolas;
	panose-1:2 11 6 9 2 2 4 3 2 4;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	line-height:107%;
	font-size:11.0pt;
	font-family:"Aptos",sans-serif;}
p.MsoPlainText, li.MsoPlainText, div.MsoPlainText
	{mso-style-link:"Plain Text Char";
	margin:0in;
	font-size:10.5pt;
	font-family:Consolas;}
span.PlainTextChar
	{mso-style-name:"Plain Text Char";
	mso-style-link:"Plain Text";
	font-family:Consolas;}
.MsoPapDefault
	{margin-bottom:8.0pt;
	line-height:107%;}
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

<body lang=EN-US style='word-wrap:break-word'>

<div class=WordSection1>

<p class=MsoNormal><b>The two implementations of the endpoint for user search
differ significantly in their approach to security, particularly in how they
handle user credentials and protect against unauthorized access.</b></p>

<p class=MsoNormal><b>Insecure Endpoint</b></p>

<p class=MsoNormal style='background:white'><b><span style='color:black'>Implementation:<br>
<br>
</span></b><i><span style='font-size:9.0pt;line-height:107%;font-family:"Courier New";
color:#FF8000'>@app</span></i><b><span style='font-size:9.0pt;line-height:107%;
font-family:"Courier New";color:navy'>.</span></b><i><span style='font-size:
9.0pt;line-height:107%;font-family:"Courier New";color:#FF8000'>route</span></i><b><span
style='font-size:9.0pt;line-height:107%;font-family:"Courier New";color:navy'>(</span></b><span
style='font-size:9.0pt;line-height:107%;font-family:"Courier New";color:gray'>'/user_search/&lt;email&gt;/&lt;password&gt;'</span><b><span
style='font-size:9.0pt;line-height:107%;font-family:"Courier New";color:navy'>,</span></b><span
style='font-size:9.0pt;line-height:107%;font-family:"Courier New";color:black'>
methods</span><b><span style='font-size:9.0pt;line-height:107%;font-family:
"Courier New";color:navy'>=[</span></b><span style='font-size:9.0pt;line-height:
107%;font-family:"Courier New";color:gray'>'GET'</span><b><span
style='font-size:9.0pt;line-height:107%;font-family:"Courier New";color:navy'>])</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><b><span
style='font-size:9.0pt;font-family:"Courier New";color:blue'>def</span></b><span
style='font-size:9.0pt;font-family:"Courier New";color:black'> </span><span
style='font-size:9.0pt;font-family:"Courier New";color:fuchsia'>user_search</span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>(</span></b><span
style='font-size:9.0pt;font-family:"Courier New";color:black'>email</span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>,</span></b><span
style='font-size:9.0pt;font-family:"Courier New";color:black'> password</span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>):</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:9.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp user </span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>=</span></b><span
style='font-size:9.0pt;font-family:"Courier New";color:black'> get_user</span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>(</span></b><span
style='font-size:9.0pt;font-family:"Courier New";color:black'>email</span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>)</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:9.0pt;font-family:"Courier New";color:black'>&nbsp;</span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:9.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp </span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:blue'>if</span></b><span
style='font-size:9.0pt;font-family:"Courier New";color:black'> user </span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:blue'>and</span></b><span
style='font-size:9.0pt;font-family:"Courier New";color:black'> user</span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>.</span></b><span
style='font-size:9.0pt;font-family:"Courier New";color:black'>password </span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>==</span></b><span
style='font-size:9.0pt;font-family:"Courier New";color:black'> password</span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>:</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:9.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp user_info
</span><b><span style='font-size:9.0pt;font-family:"Courier New";color:navy'>=</span></b><span
style='font-size:9.0pt;font-family:"Courier New";color:black'> </span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>{</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:9.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span><span
style='font-size:9.0pt;font-family:"Courier New";color:gray'>&quot;ID&quot;</span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>:</span></b><span
style='font-size:9.0pt;font-family:"Courier New";color:black'> user</span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>.</span></b><b><span
style='font-size:9.0pt;font-family:"Courier New";color:#880088'>id</span></b><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>,</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:9.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span><span
style='font-size:9.0pt;font-family:"Courier New";color:gray'>&quot;Name&quot;</span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>:</span></b><span
style='font-size:9.0pt;font-family:"Courier New";color:black'> user</span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>.</span></b><span
style='font-size:9.0pt;font-family:"Courier New";color:black'>name</span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>,</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:9.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span><span
style='font-size:9.0pt;font-family:"Courier New";color:gray'>&quot;Email&quot;</span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>:</span></b><span
style='font-size:9.0pt;font-family:"Courier New";color:black'> user</span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>.</span></b><span
style='font-size:9.0pt;font-family:"Courier New";color:black'>email</span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>,</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:9.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span><span
style='font-size:9.0pt;font-family:"Courier New";color:gray'>&quot;Password&quot;</span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>:</span></b><span
style='font-size:9.0pt;font-family:"Courier New";color:black'> user</span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>.</span></b><span
style='font-size:9.0pt;font-family:"Courier New";color:black'>password</span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:9.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>}</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:9.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:blue'>return</span></b><span
style='font-size:9.0pt;font-family:"Courier New";color:black'> jsonify</span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>(</span></b><span
style='font-size:9.0pt;font-family:"Courier New";color:black'>user_info</span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>),</span></b><span
style='font-size:9.0pt;font-family:"Courier New";color:black'> </span><span
style='font-size:9.0pt;font-family:"Courier New";color:red'>200</span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:9.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp </span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:blue'>else</span></b><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>:</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:9.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:blue'>return</span></b><span
style='font-size:9.0pt;font-family:"Courier New";color:black'> jsonify</span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>({</span></b><span
style='font-size:9.0pt;font-family:"Courier New";color:gray'>&quot;message&quot;</span><b><span
style='font-size:9.0pt;font-family:"Courier New";color:navy'>:</span></b><span
style='font-size:9.0pt;font-family:"Courier New";color:black'> </span><span
style='font-size:9.0pt;font-family:"Courier New";color:gray'>&quot;User not
found or incorrect password&quot;</span><b><span style='font-size:9.0pt;
font-family:"Courier New";color:navy'>}),</span></b><span style='font-size:
9.0pt;font-family:"Courier New";color:black'> </span><span style='font-size:
9.0pt;font-family:"Courier New";color:red'>404</span></p>

<p class=MsoPlainText><b>&nbsp;</b></p>

<p class=MsoNormal><b>Key Issues:</b></p>

<ol style='margin-top:0in' start=1 type=1>
 <li class=MsoNormal><b>URL Exposure: The endpoint reveals sensitive
     information (email and password) in the URL. URLs are typically logged in
     server logs and browser history, making it easy for unauthorized users to
     access this information.</b></li>
 <li class=MsoNormal><b>GET Method: Using a GET method for sensitive operations
     is insecure because GET requests can be cached, stored in browser history,
     and logged by intermediary servers.</b></li>
 <li class=MsoNormal><b>No Rate Limiting: The endpoint does not implement any
     measures to prevent brute force attacks.</b></li>
 <li class=MsoNormal><b>Full Password Exposure: The response includes the
     user's password, which is a significant security risk.</b></li>
</ol>

<p class=MsoNormal><b>&nbsp;</b></p>

<p class=MsoNormal><b>&nbsp;</b></p>

<p class=MsoNormal><b>Secure Endpoint</b></p>

<p class=MsoNormal><b>Implementation:</b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><i><span
style='font-size:10.0pt;font-family:"Courier New";color:#FF8000'>@app</span></i><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>.</span></b><i><span
style='font-size:10.0pt;font-family:"Courier New";color:#FF8000'>route</span></i><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>(</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:gray'>'/user_search_secure'</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>,</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> methods</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>=[</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:gray'>'POST'</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>])</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><b><span
style='font-size:10.0pt;font-family:"Courier New";color:blue'>def</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> </span><span
style='font-size:10.0pt;font-family:"Courier New";color:fuchsia'>user_search_secure</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>():</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp ip_address </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>=</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>
get_remote_address</span><b><span style='font-size:10.0pt;font-family:"Courier New";
color:navy'>()</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp data </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>=</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> request</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>.</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>json</span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp email </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>=</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> data</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>.</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>get</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>(</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:gray'>&quot;email&quot;</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>)</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp password </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>=</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> data</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>.</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>get</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>(</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:gray'>&quot;password&quot;</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>)</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:blue'>if</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:blue'>not</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> email </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:blue'>or</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:blue'>not</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> password</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>:</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:blue'>return</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> jsonify</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>({</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:gray'>&quot;message&quot;</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>:</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> </span><span
style='font-size:10.0pt;font-family:"Courier New";color:gray'>&quot;NO email or
password!&quot;</span><b><span style='font-size:10.0pt;font-family:"Courier New";
color:navy'>}),</span></b><span style='font-size:10.0pt;font-family:"Courier New";
color:black'> </span><span style='font-size:10.0pt;font-family:"Courier New";
color:red'>400</span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp;</span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp user </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>=</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> get_user</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>(</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>email</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>)</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:blue'>if</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> user </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:blue'>and</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> user</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>.</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>password </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>==</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> password</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>:</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span><span
style='font-size:10.0pt;font-family:"Courier New";color:green'># Reset the
count of failed attempts on successful login</span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
failed_attempts</span><b><span style='font-size:10.0pt;font-family:"Courier New";
color:navy'>.</span></b><span style='font-size:10.0pt;font-family:"Courier New";
color:black'>pop</span><b><span style='font-size:10.0pt;font-family:"Courier New";
color:navy'>(</span></b><span style='font-size:10.0pt;font-family:"Courier New";
color:black'>ip_address</span><b><span style='font-size:10.0pt;font-family:
"Courier New";color:navy'>,</span></b><span style='font-size:10.0pt;font-family:
"Courier New";color:black'> </span><b><span style='font-size:10.0pt;font-family:
"Courier New";color:#880088'>None</span></b><b><span style='font-size:10.0pt;
font-family:"Courier New";color:navy'>)</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
user_info </span><b><span style='font-size:10.0pt;font-family:"Courier New";
color:navy'>=</span></b><span style='font-size:10.0pt;font-family:"Courier New";
color:black'> </span><b><span style='font-size:10.0pt;font-family:"Courier New";
color:navy'>{</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span><span
style='font-size:10.0pt;font-family:"Courier New";color:gray'>&quot;ID&quot;</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>:</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> user</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>.</span></b><b><span
style='font-size:10.0pt;font-family:"Courier New";color:#880088'>id</span></b><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>,</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span><span
style='font-size:10.0pt;font-family:"Courier New";color:gray'>&quot;Name&quot;</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>:</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> user</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>.</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>name</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>,</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span><span
style='font-size:10.0pt;font-family:"Courier New";color:gray'>&quot;Email&quot;</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>:</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> user</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>.</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>email</span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>}</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:blue'>return</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> jsonify</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>(</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>user_info</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>),</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> </span><span
style='font-size:10.0pt;font-family:"Courier New";color:red'>200</span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:blue'>else</span></b><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>:</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span><span
style='font-size:10.0pt;font-family:"Courier New";color:green'># Update the
count of failed attempts</span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:blue'>with</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> threading</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>.</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>Lock</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>():</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:blue'>if</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> ip_address </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:blue'>not</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:blue'>in</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> failed_attempts</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>:</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span><span
style='font-size:10.0pt;font-family:"Courier New";color:green'># Set a timer to
reset this count after 60 seconds</span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
timer </span><b><span style='font-size:10.0pt;font-family:"Courier New";
color:navy'>=</span></b><span style='font-size:10.0pt;font-family:"Courier New";
color:black'> threading</span><b><span style='font-size:10.0pt;font-family:
"Courier New";color:navy'>.</span></b><span style='font-size:10.0pt;font-family:
"Courier New";color:black'>Timer</span><b><span style='font-size:10.0pt;
font-family:"Courier New";color:navy'>(</span></b><span style='font-size:10.0pt;
font-family:"Courier New";color:red'>60.0</span><b><span style='font-size:10.0pt;
font-family:"Courier New";color:navy'>,</span></b><span style='font-size:10.0pt;
font-family:"Courier New";color:black'> reset_failed_attempts</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>,</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>[</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>ip_address</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>])</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
timer</span><b><span style='font-size:10.0pt;font-family:"Courier New";
color:navy'>.</span></b><span style='font-size:10.0pt;font-family:"Courier New";
color:black'>start</span><b><span style='font-size:10.0pt;font-family:"Courier New";
color:navy'>()</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
failed_attempts</span><b><span style='font-size:10.0pt;font-family:"Courier New";
color:navy'>[</span></b><span style='font-size:10.0pt;font-family:"Courier New";
color:black'>ip_address</span><b><span style='font-size:10.0pt;font-family:
"Courier New";color:navy'>]</span></b><span style='font-size:10.0pt;font-family:
"Courier New";color:black'> </span><b><span style='font-size:10.0pt;font-family:
"Courier New";color:navy'>=</span></b><span style='font-size:10.0pt;font-family:
"Courier New";color:black'> </span><span style='font-size:10.0pt;font-family:
"Courier New";color:red'>1</span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:blue'>else</span></b><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>:</span></b></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
failed_attempts</span><b><span style='font-size:10.0pt;font-family:"Courier New";
color:navy'>[</span></b><span style='font-size:10.0pt;font-family:"Courier New";
color:black'>ip_address</span><b><span style='font-size:10.0pt;font-family:
"Courier New";color:navy'>]</span></b><span style='font-size:10.0pt;font-family:
"Courier New";color:black'> </span><b><span style='font-size:10.0pt;font-family:
"Courier New";color:navy'>+=</span></b><span style='font-size:10.0pt;
font-family:"Courier New";color:black'> </span><span style='font-size:10.0pt;
font-family:"Courier New";color:red'>1</span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span><span
style='font-size:10.0pt;font-family:"Courier New";color:green'># Check if rate
limit should be applied</span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:blue'>if</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> failed_attempts</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>[</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>ip_address</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>]</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>&gt;</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> </span><span
style='font-size:10.0pt;font-family:"Courier New";color:red'>5</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>:</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp </span><span
style='font-size:10.0pt;font-family:"Courier New";color:green'># Allowing 5
failed attempts per minute</span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:blue'>return</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> jsonify</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>({</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:gray'>&quot;message&quot;</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>:</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> </span><span
style='font-size:10.0pt;font-family:"Courier New";color:gray'>&quot;Rate limit
exceeded&quot;</span><b><span style='font-size:10.0pt;font-family:"Courier New";
color:navy'>}),</span></b><span style='font-size:10.0pt;font-family:"Courier New";
color:black'> </span><span style='font-size:10.0pt;font-family:"Courier New";
color:red'>429</span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:black'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:blue'>return</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> jsonify</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>({</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:gray'>&quot;message&quot;</span><b><span
style='font-size:10.0pt;font-family:"Courier New";color:navy'>:</span></b><span
style='font-size:10.0pt;font-family:"Courier New";color:black'> </span><span
style='font-size:10.0pt;font-family:"Courier New";color:gray'>&quot;Invalid
login credentials&quot;</span><b><span style='font-size:10.0pt;font-family:
"Courier New";color:navy'>}),</span></b><span style='font-size:10.0pt;
font-family:"Courier New";color:black'> </span><span style='font-size:10.0pt;
font-family:"Courier New";color:red'>401</span></p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal><b>Key Improvements:</b></p>

<ol style='margin-top:0in' start=1 type=1>
 <li class=MsoNormal><b>POST Method: The secure endpoint uses the POST method,
     which does not expose parameters in the URL and is more suitable for
     operations that change server state or involve sensitive data.</b></li>
 <li class=MsoNormal><b>Request Body for Credentials: Credentials are sent in
     the request body, making it less likely to be logged or intercepted
     compared to URL parameters.</b></li>
 <li class=MsoNormal><b>Rate Limiting: The implementation tracks failed login
     attempts and imposes a rate limit to prevent brute force attacks. If an IP
     address exceeds five failed attempts within a minute, it is temporarily
     blocked.</b></li>
 <li class=MsoNormal><b>No Password in Response: The user's password is
     excluded from the response, reducing the risk of sensitive information
     being exposed.</b></li>
 <li class=MsoNormal><b>Concurrency Control: A threading lock is used to handle
     updates to the failed attempts dictionary safely in a concurrent
     environment.</b></li>
</ol>

<p class=MsoNormal><b>Additional Security Measures</b></p>

<p class=MsoNormal><b>To further enhance the security of the endpoint by
implementing the following measures:</b></p>

<ol style='margin-top:0in' start=1 type=1>
 <li class=MsoNormal><b>HTTPS: Ensure the API is only accessible over HTTPS to
     protect data in transit from eavesdropping and man-in-the-middle attacks.</b></li>
 <li class=MsoNormal><b>Hashing Passwords: Store hashed passwords instead of
     plain text. Use a strong hashing algorithm like bcrypt or Argon2 to make
     it difficult for attackers to reverse the hashes if they gain access to
     the database.</b></li>
 <li class=MsoNormal><b>Multi-Factor Authentication (MFA): Implement MFA to add
     an extra layer of security, requiring users to provide two or more
     verification factors to access their accounts.</b></li>
 <li class=MsoNormal><b>Token-Based Authentication: Use JWT (JSON Web Tokens)
     or another token-based authentication method to manage user sessions
     securely without exposing passwords in every request.</b></li>
 <li class=MsoNormal><b>Input Validation and Sanitization: Validate and
     sanitize all inputs to protect against injection attacks, such as SQL
     injection and cross-site scripting (XSS).</b></li>
 <li class=MsoNormal><b>Audit Logging: Implement detailed logging of
     authentication attempts and access patterns. Monitor logs for suspicious
     activities.</b></li>
 <li class=MsoNormal><b>IP Blacklisting: Maintain a blacklist of known
     malicious IP addresses and block requests from these addresses.</b></li>
 <li class=MsoNormal><b>Content Security Policy (CSP): Use CSP headers to
     prevent XSS attacks by controlling the resources the browser is allowed to
     load for your site.</b></li>
 <li class=MsoNormal><b>Session Management: Ensure sessions are properly
     managed and expired after a certain period of inactivity. Use secure
     cookies to store session tokens.</b></li>
</ol>

<p class=MsoNormal><b>By implementing these measures, the security of the
endpoint can be further strengthened, providing better protection against a
wide range of potential threats.</b></p>

<p class=MsoNormal>&nbsp;</p>

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