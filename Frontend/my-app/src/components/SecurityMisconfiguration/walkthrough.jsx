import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h4><strong>Preliminary Work</strong></h4>
      <ol>
        <li><strong>The testing application Postman is needed for this walkthrough. A web version is offered, or you may download the desktop application. All versions can be found here. For the sake of this walkthrough, the web version will be used and referenced, as no downloads are needed.</strong></li>
        <br></br>

        <li><strong>First, you must create a Workspace in Postman.  Existing Workspaces and Workspace creation can be found in the top-left of the task bar, shown below (all points of interest in this walkthrough will be outlined). You may choose to create a blank workspace and name it whatever you would like.</strong></li>
        <img src="/assets/sm/fig1.png" alt="step1" style={{ width: '45vw', height: 'auto' }} />
        <p>Fig 1.1 – Workspace Creation</p>
        <br></br>

        <li><strong>Next, you will need to create an Environment. This can Be done by selecting “Environments” [1] in the left toolbar, and then selecting the “+” button [2].</strong></li>
        <img  src="/assets/sm/fig2.png" alt="step2" style={{ width: 'auto', height: 'auto' }} />
        <p>Fig 1.2 – Environment Creation</p>
        <br></br>

        <li><strong>After creating an environment, you will need to set one environment variable as shown below.</strong></li>
        <img src="/assets/sm/fig3.png" alt="step3" style={{ width: '45vw', height: 'auto' }} />
        <p>Fig 1.3 – Setting your environment variable</p>
        <br></br>

        <li><strong>Lastly, you need to create your test collection, where we will be creating a few tests that may or may not reveal some sensitive information. Similar to creating an Environment, you will want to select “Collections” [1] from the left toolbar, and then click the “+” button [2] to create your new Collection. You may select “Blank Collection” and once again name it as you please.</strong></li>
        <img src="/assets/sm/fig4.png" alt="step4"style={{ width: 'auto', height: 'auto' }} />
        <p></p>
        <br></br>
      </ol>


      <h4><strong>Exploit the Security Misconfiguration Vulnerability</strong></h4>
      <ol>
        <li><strong>You are finished with your preliminary Postman setup and are ready to begin the attack! To start, you will navigate to the section above titled “Perform an attack.” Please read through the bulleted points, and don’t forget to reset the database first! The “Reset Database” button can be found in the bottom-left corner of the web page, in the footer.</strong></li>
        <br></br>

        <li><strong>After navigating to the “Perform an attack” section and resetting the database, you will start by adding a user to our database. This can be accomplished by clicking the “Add User” button.</strong></li>
        <img src="/assets/sm/fig5.png" alt="step5" style={{ width: 'auto', height: 'auto' }} />
        <p>Fig 2.1 – “Add User” button to create user in database</p>
        <br></br>

        <li><strong>Upon clicking the “Add User” button, a pop-up will appear. Let’s add a new user to our database by typing the following into the pop-up and submitting the form:</strong></li>
        <img src="/assets/sm/fig6.png" alt="step6" style={{ width: 'auto', height: '55vh' }} />
        <p>Fig 2.2 – Adding a new user</p>
        <br></br>

        <li><strong>Great work! Since we are trying to exploit a vulnerability, let’s see what happens if we try to create a user who is already in our database. When you reset the database at the beginning, it was populated with a few users. One email that exists in our database is alice@example.com, let’s give that one a try. Note: The name and password can be anything, as the account is tied to the unique email address.</strong></li>
        <img src="/assets/sm/fig7.png" alt="step7" style={{ width: 'auto', height: 'auto' }} />
        <p>Fig 2.3 – User creation was successful</p>
        <br></br>

        <li><strong>Lastly, you need to create your test collection, where we will be creating a few tests that may or may not reveal some sensitive information. Similar to creating an Environment, you will want to select “Collections” [1] from the left toolbar, and then click the “+” button [2] to create your new Collection. You may select “Blank Collection” and once again name it as you please.</strong></li>
        <img src="/assets/sm/fig8.png" alt="step8" style={{ width: 'auto', height: '55vh' }} />
        <p>Fig 2.4 – Attempting to create a user with an email that is already registered</p>
        <br></br>
        <img src="/assets/sm/fig9.png" alt="step9" style={{ width: 'auto', height: 'auto' }} />
        <p>Fig 2.5 – User creation failed</p>
        <br></br>
        <p>This time, our user creation failed, which is to be expected. Our database of users is designed so that exactly one account may be created per unique email. There may be another way to find the sensitive information we are looking for. Let’s try our luck with Postman.</p>
        <br></br>
      </ol>


      <h4><strong>Looking for More Information Using Postman</strong></h4>
      <ol>
        <li><strong>Bring Postman back up. Now that we have our environment and collection created from the “Preliminary Work” section of this walkthrough, we need to make some requests! From the “Collections” tab that we were most recently on within Postman, find the collection that you created. In the example below, ours is called “Capstone.” Select the three dots to the right of your collection and click on “Add Request.”</strong></li>
        <img src="/assets/sm/fig10.png" alt="step10" style={{ width: 'auto', height: 'auto' }} />
        <p>Fig 3.1 – “More Actions” symbol for Capstone Collection</p>
        <br></br>

        <li><strong>Next, we will enter in a series of information to create our request to send to the server. Please refer to the image below for guidance.</strong></li>
        <img src="/assets/sm/fig11.png" alt="step11" style={{ width: '45vw', height: 'auto' }} />
        <p>Fig 3.2 – Outlined components that must be entered to create a request</p>
        <br></br>

        <li><strong>Great! Your results should be as shown below. We received the response from the server. The response status code is a “201 CREATED,” which indicates that we were able to successfully add a user to our database [1]. The response body is shown under our request. You can see the success message that appeared in the alert pop-up upon successful user creation on our web application from earlier [2]</strong></li>
        <img src="/assets/sm/fig12.png" alt="step12" style={{ width: '45vw', height: '45hv' }} />
        <p>Fig 3.3 – Response body upon successful user creation</p>
        <br></br>

        <li><strong> Let’s see what happens when we try to create a user using an existing email again, this time making our request in Postman. You will need to create a new request for this. Follow the previous steps outlined in bullet point #2 above, except this time we will use an email that has already been used to create a user in our database. alice@example.com is always a great email address to use if you want to guarantee user creation failure. Figure 3.4 is provided below with all the correct information for our request if you need to reference it.</strong></li>
        <img src="/assets/sm/fig13.png" alt="step13" style={{ width: '45vw', height: 'auto' }} />
        <p>Fig 3.4 – POST request that will result in failure to add user</p>
        <br></br>

        <li><strong>We’ve discovered something! Fortunately for us as attackers, the developers of this insecure web application have made a mistake. While using the web application, no sensitive data is revealed so the developers thought their data was secure. Unfortunately, they did not take precautions against security misconfigurations, and mistakenly included sensitive information in their server’s response body.</strong></li>
        <img src="/assets/sm/fig14.png" alt="step14" style={{ width: '45vw', height: 'auto' }} />
        <p>Fig 3.5 – Revealing response body due to security misconfigurations</p>
        <br></br>
      </ol>
      
    </div>
  );
};

export default MyComponent;

