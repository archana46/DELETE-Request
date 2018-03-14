$(document).ready( function() {
    app.initialized()
        .then(function(_client) {
          var client = _client;
          client.events.on('app.activated',
            function() {
                client.data.get('contact')
                    .then(function(data) {
                        var contactid= data.contact.id;

                        var options = {
                            headers: 
                            {
                                "Authorization": "Basic cHJrbGh3a2RPOUkxZGxWR3l1Zw==",
                                "content-type":"application/json"
                            },
                            body: JSON.stringify({
                                "name":"Rogers",
                                 "job_title":"Captain America"       
                            })
                        }
                            var url = 'https://ducky.freshdesk.com/api/v2/contacts/36005440528';
                            console.log('contactid url:', url);
                            client.request.put(url, options)
                            .then(function(contactsuccess) {
                                console.log('contactsuccess:',contactsuccess);
                            },
                            function (contacterr) {
                                // body...
                                console.log('contacterr',contacterr);
                            })

                        })
                        .catch(function(f){
                            console.log('Error -',f);
                        })
                    })
                    .catch(function(e) {
                        console.log('Exception - ', e);
                    });
        });
    });
