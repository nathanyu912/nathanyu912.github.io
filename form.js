const form = document.getElementById('feedbackForm');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            storeFormData();
            form.reset();
        });

        //function to store all data from form 
        function storeFormData() {
            const formData = {
                fname: document.getElementById('fname').value,
                lname: document.getElementById('lname').value,
                email: document.getElementById('email').value,
                age: document.getElementById('age').value,
                gender: document.querySelector('input[name="gender"]:checked').value,
                interests: getCheckedInterests(),
                musicgenre: document.getElementById('musicgenre').value,
                comments: document.getElementById('comments').value
            };

            localStorage.setItem('formData', JSON.stringify(formData));
        }

        //function to get all checked interests
        function getCheckedInterests() {
            const checkboxes = document.querySelectorAll('input[name="interests"]:checked');
            const interests = [];
            checkboxes.forEach(function(checkbox) {
                interests.push(checkbox.value);
            });
            return interests;
        }

        //function to clear form
        function clearForm() {
            form.reset();
            localStorage.removeItem('formData');
        }