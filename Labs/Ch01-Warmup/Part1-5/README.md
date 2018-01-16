# Chapter 1 Exercise 5: SuperAgent

## Objectives:
* Practice with superagent
* Create a delete call

## Steps

1. If you havent already (from demo) - install the packages `exorcist` and `watchify` globally using 
    ```npm i -g exorcist watchify```

1. Copy/paste the `/Demos/Ch01-Review../super-agent` folder to `/WarmUp` so that you have a `/MyWarmUp/super-agent` folder.

1. Sometimes, the node_modules folder do not copy well. Try to start the project by executing the command: `npm run start`

1. If you get an error, delete node_module and execute `npm install`, then try `npm run start` again.

1. Implement the delete functionality in the `/public/api/js` file. It should:
    * call the json-server using superagent to delete
    * update the makesLocal array to remove the object that has the same `id` being passed
    * call the function which refreshes the screen

1. If you need help follow the steps below.

1. Find this line in `api.js`
    ``` javascript
    alert(`Trying to delete ${id} - not yet implemented`);
    ```
1. After this line use this code for superagent, and complete the TODO:
    ``` javascript
    request
    .delete(` `)  //TODO: ADD THE CORRECT URL
    .then(function(res) {
        makesLocal = makesLocal.filter(function(el) {
            return el.id !== id;
        });
        alert(`Deleted record`);
        
        showmakes();
    })
    .catch(function(err) {
        // err.message, err.response
        throw new Error('An AJAX error occured: ' + err.message);
    });
    ```

1. Test the changes that you have made. 