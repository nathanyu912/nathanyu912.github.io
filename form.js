const form = document.getElementById('feedbackForm');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            storeFormData();
            form.reset();
        });

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

        function getCheckedInterests() {
            const checkboxes = document.querySelectorAll('input[name="interests"]:checked');
            const interests = [];
            checkboxes.forEach(function(checkbox) {
                interests.push(checkbox.value);
            });
            return interests;
        }

        function clearForm() {
            form.reset();
            localStorage.removeItem('formData');
        }