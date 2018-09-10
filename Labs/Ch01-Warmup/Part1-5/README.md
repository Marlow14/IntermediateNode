# Chapter 1 Exercise 5: SuperAgent

## Objectives:
* Practice with superagent
* Create a delete call

## Steps

1. To make the following faster - you can first delete the node_modules folder from `/Demos/Ch01-Review../super-agent`.

    Copy/paste the `/Demos/Ch01-Review../super-agent` folder to `/WIP/Ch01` so that you have a `/WIP/Ch01/super-agent` folder.

1. Sometimes, the node_modules folders do not copy well. Try to using `npm install`, then `npm run start`.

1. Implement the delete functionality in the `/public/api/js` file. It should:
    * call the json-server using superagent to delete
    * update the makesLocal array to remove the object that has the same `id` being passed
    * call the function which refreshes the screen

1. If you need help follow the steps below.

1. Find this line in `api.js`
    ``` javascript
    alert(`Trying to delete ${id} - not yet implemented`);
    ```

1. After this line use the following code for superagent, and complete the TODO:

    ``` javascript
    request
    .delete(" ")  /* TODO: ADD THE CORRECT URL*/
    .then(function(res) {
        makesLocal = makesLocal.filter(function(el) {
            return el.id !== id;
        });
        alert(`Deleted record`);
        
        showmakes();
    })
    .catch(function(err) {
        /* err.message, err.response */
        throw new Error('An AJAX error occured: ' + err.message);
    });
    ```

1. Test the changes that you have made. 