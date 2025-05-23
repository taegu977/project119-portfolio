		// 할 일 추가
		function addTask() {
			let frm = document.forms["addTaskForm"];
		    let task = frm.task.value.trim();
			
		    if(task === "") {
		        window.alert("내용을 입력해 주세요.");
		        frm.task.focus();
		        return;
		    }
			frm.submit();
		}
		
		// Enter 키로 할 일 추가
		function inkey(event) {
		    if(event.key == 'Enter') {
				event.preventDefault();
				addTask();
			}
		}

    // 할 일 수정
		function editTask(id) {
			// p 태그를 input 태그로 변경
			const id_name = "#task_no_" + id;
			const p_element = document.querySelector(id_name + " > p");
			const input_element = document.createElement("input");
			let task = p_element.innerText;
			input_element.type = "text";
			input_element.value = task;
			p_element.replaceWith(input_element);

			// button 속성 변경
			const btn_element = document.querySelector("#edit_button_" + id);
			btn_element.value = "저장";
			btn_element.onclick = function() {saveTask(id); };
		}

		function saveTask(id) {
			let task = document.querySelector("#task_no_" + id + " > input").value;
			let project_id = addTaskForm.project_id.value;
			location.href = "editTask?id=" + id + "&task=" + task + "&project_id=" + project_id;
		}
		
		function changeStatus(el) {
			const status_list = {"start":"progress","progress":"stop","stop":"complete","complete":"start"};
			const id_element = el.nextElementSibling;
			const status_element = id_element.nextElementSibling;
			const id = id_element.value;
			const status = status_element.value;
			let project_id = addTaskForm.project_id.value;
			location.href = "changeStatus?id=" + id + "&status=" + status_list[status] + "&project_id=" + project_id;;
		}
	
		
		function viewRecCnt() {
			searchFrm.submit();
		}
		

		function addFile(button) {
			const parent = button.parentElement;
			var addElement = document.createElement('div');
			addElement.innerHTML = '<input type="file" name="file">'
									+ '<input type="button" value="X" onclick="delFile(this)">';
			parent.appendChild(addElement);
		}

		function delFile(button) {
			button.parentElement.remove();
		}
			
		
