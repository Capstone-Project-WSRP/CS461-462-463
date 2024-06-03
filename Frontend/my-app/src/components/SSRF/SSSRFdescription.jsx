import React from 'react';

const SSRFdescription = () => {
  return (
    <div>
      <h2>What is Server-Side Request Forgery (SSRF)</h2>
      <p>
        Abusing server-side functionality to read or update internal resources with either a supplied or modified URL.
        With the URL the server will read or submit data to the server and may be able to read server configurations, internal service or expose credentials that that users are not supposed to see.
      </p>
      <h3>Understanding Server-Side Request Forgery (SSRF)</h3>
      <p>
        Server-Side Request Forgery (SSRF) happens when attackers craft specific URLS.
      </p>
      <ol>
        <li><strong>Server meta-data theft:</strong> Unauthorized parties can steal information such as authentication keys and server configuration data.</li>
        <li><strong>Data extraction:</strong> Can extract data from database using HTTP interfaces using endpoints that are normally not reachable client-side.</li>
        <li><strong>Access to restricted Internal REST interfaces:</strong> Gain access to Internals services that should only be available to server-side, such as an Admin panel.</li>
        <li><strong>Access to internal Files:</strong> Gain Access to Internal Server-side files that only the internal network should have access to.</li>
      </ol>
      <h3>The impact of Server-Side Request Forgery (SSRF)</h3>
      <p>
        The consequences of Server-Side Request Forgery (SSRF) are severe. Security breaches become far more likely, potentially leading to:
      </p>
      <ol>
        <li><strong>Data exposure and theft:</strong> Unauthorized parties can steal sensitive information, compromising the privacy of individuals.</li>
        <li><strong>Modification of data:</strong> Data integrity is damaged as attackers tamper with records.</li>
        <li><strong>Disruption of operations:</strong> Attackers may be able to exploit system functions for malicious purposes, hindering business operations.</li>
        <li><strong>Financial and reputational harm:</strong> Organizations face financial penalties, lawsuits, and loss of public trust due to these breaches.</li>
      </ol>
      <h3>Identifying and preventing Server-Side Request Forgery (SSRF)</h3>
      <p>
        To combat Server-Side Request Forgery (SSRF), organizations must prioritize the following:
      </p>
      <ol>
        <li><strong>Security audits:</strong> Regular reviews expose misconfigurations or weaknesses in controls.</li>
        <li><strong>Whitelisting:</strong> Only allow requests from only trusted domains or IP addresses.</li>
        <li><strong>Input Validation:</strong> Sanitize user inputs so users are not entering where they are not supposed to.</li>
        <li><strong>Monitor and Logging:</strong> Log all outbound requests to server to be on the lookout for unusual patterns.</li>
      </ol>
    </div>
  );
};

export default SSRFdescription;
