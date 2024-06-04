import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <ol>
        <li><strong>First, you will need to install <a href="https://portswigger.net/burp/communitydownload">Burp Suite Community edition.</a></strong></li>
        <br></br>

        <li><strong>Next, we will need to find some email addresses to be able to try and break some passwords. I will provide 2 that are in the system for sure.</strong><br></br>
          <strong>Alice@example.com</strong><br></br>
          <strong>Bob@example.com</strong>
        </li>
        <br></br>

        <li><strong>Now you will need to add a user to the database. Click add user at the top of the page.</strong></li>
        <img src="/assets/bac/step1bac.png" alt="step1" style={{ width: 'auto', height: 'auto' }}/>
        <br></br>
        <br></br>

        <li><strong>Click through the first two screens accepting the defaults in Burp suite. You should now be at this screen.</strong></li>
        <img src="/assets/bac/step2bac.png" alt="step2" style={{ width: '45vw', height: 'auto' }}/>
        <br></br>
        <br></br>

        <li><strong>We now need to open a proxy web browser, click Proxy &gt; Open browser and then navigate to localhost:3000.</strong></li>
        <img src="/assets/bac/step3bac.png" alt="step3" style={{ width: '50vw', height: 'auto' }}/>
        <br></br>
        <br></br>

        <li><strong>In Burp Suite click on Target. Now back in the webApp preform the search with the user you just created. Now in the tree on the left side of Burp suite you should see http://localhost:5000. Open the tree and find user_search.</strong></li>
        <img src="/assets/bac/step4bac.png" alt="step4" style={{ width: 'auto', height: '50vh' }}/>
        <br></br>
        <br></br>

        <img src="/assets/bac/step5bac.png" alt="step5" style={{ width: '45vw', height: 'auto' }}/>
        <br></br>
        <br></br>
        
        <li><strong>On the other side of the window you will see the url which was used to make the search request. You want to right click on this URL and send to intruder. And then click the intruder tab at the top.</strong></li>
        <img src="/assets/bac/step6bac.png" alt="step6" style={{ width: '45vw', height: 'auto' }}/>
        <br></br>
        <br></br>

        <li><strong>In here we can see a lot about the request. We are intresed in two things, the Password field and email field.</strong></li>
        <img src="/assets/bac/step7bac.png" alt="step7" style={{ width: 'auto', height: 'auto' }}/>
        <br></br>
        <br></br>

        <li><strong> At this point we want to replace that email with one of the two that was give earlier. It should look like this.</strong></li>
        <img src="/assets/bac/step8bac.png" alt="step8" style={{ width: 'auto', height: 'auto' }}/>
        <br></br>
        <br></br>

        <li><strong>Next highlight the password field and click the Add button on the right side of the screen.</strong></li>
        <img src="/assets/bac/step9bac.jpg" alt="step9" style={{ width: 'auto', height: 'auto' }}/>
        <br></br>
        <br></br>

        <li><strong>Now click Payloads</strong></li>
        <img src="/assets/bac/step10bac.png" alt="step10" style={{ width: '45vw', height: 'auto' }}/>
        <br></br>
        <br></br>

        <li><strong>In the payloads section we are going to use a simple list. In this section you are able to load any list of words you would like. You can find list of the most common passwords and use that if you would like. The issue we will run into is we are using a free version of Burp suite and it will slow down the request.
              Do to this we will create our own list that has only a few words one of which will be the password one of the two accounts that is given.</strong></li>
              <img src="/assets/bac/step11bac.png" alt="step11" style={{ width: 'auto', height: 'auto' }}/>
              <br></br>
        <br></br>

        <li><strong>Now simply click Start Attack! And Alice1234 is the only password the return 200, we now have Alices password.</strong></li>
        <img src="/assets/bac/step12bac.jpg" alt="step12" style={{ width: 'auto', height: 'auto' }}/>
        <br></br>
        <br></br>

        <li><strong>Using alice@example.com and the password Alice1234 preform the search again and we now have alices personal information.
              You can imagine that with this you would be more information about alice or the ability to preform actions you shouldnt be able to.
                In the example none of that is present and this is just for demonstration.</strong></li>
        <img src="/assets/bac/step13bac.jpg" alt="step13" style={{ width: 'auto', height: 'auto' }}/>
      </ol>
      <p style={{margin: '20px',}}>
        
      </p>
    </div>
  );
};

export default MyComponent;
