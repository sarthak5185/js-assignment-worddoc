window.addEventListener('load',()=>{
    const form = document.querySelector(".input_div");
      const input = document.querySelector(".input");
      const list_el = document.querySelector("#tasks");
    const subbtn=document.querySelector(".addButton");
    console.log(form);
    subbtn.addEventListener("click",(e)=>{
      // prevents default action of submitting the form
      e.preventDefault();
      console.log("Submit Form");
      const task=input.value;
      if(!task)
      {
        alert("Kindly enter a task");
        return;
      }
      else
      {
        console.log("success");
      }
  
        // ADDING VALID HTML INSIDE DIV WITH ID TASKS
          const task_el = document.createElement('div');
          task_el.classList.add('task');
  
          const task_content_el = document.createElement('div');
          task_content_el.classList.add('content');
  
          task_el.appendChild(task_content_el);
  
          const task_input_el = document.createElement('input');
          task_input_el.classList.add('text');
          task_input_el.type = 'text';
          task_input_el.value = task;
          task_input_el.setAttribute('readonly', 'readonly');
  
          task_content_el.appendChild(task_input_el);
  
          const task_actions_el = document.createElement('div');
          task_actions_el.classList.add('actions');
          
          const task_edit_el = document.createElement('button');
          task_edit_el.classList.add('editButton');
          task_edit_el.innerText = 'Edit';
  
          const task_delete_el = document.createElement('button');
          task_delete_el.classList.add('deleteButton');
          task_delete_el.innerText = 'Delete';
  
          task_actions_el.appendChild(task_edit_el);
          task_actions_el.appendChild(task_delete_el);
  
          task_el.appendChild(task_actions_el);
          list_el.appendChild(task_el);

          input.value = '';
          // IF PERSON CLICKS ON TASK EDIT AND INNER TEXT IS EDIT THEN DISABLE READONLY BY REMOVING READONLY ATTRIBUTE AND CHANGE INNER TEXT TO SAVE
		      task_edit_el.addEventListener('click', (e) => {
      			if (task_edit_el.innerText.toLowerCase() == "edit") {
      				task_edit_el.innerText = "Save";
      				task_input_el.removeAttribute("readonly");
      				task_input_el.focus();
      			} 
            // IF INNER TEXT IS SAVE THEN DISABLE READONLY AND CHANGE TO EDIT
            else {
      				task_edit_el.innerText = "Edit";
      				task_input_el.setAttribute("readonly", "readonly");
      			}
      		});
      
      		task_delete_el.addEventListener('click', (e) => {
      			list_el.removeChild(task_el);
      		});

    })
  })