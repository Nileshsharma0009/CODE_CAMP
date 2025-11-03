        // The JavaScript code you provided is correct and should be saved in index.js
        // For completeness, here is the JS code:
        document.addEventListener('DOMContentLoaded', function() {
            const teamSizeSelect = document.getElementById('teamSize');
            const member3Group = document.getElementById('member3-group');
            const member4Group = document.getElementById('member4-group');
            const member3Input = document.getElementById('member3');
            const member4Input = document.getElementById('member4');
            const paymentProofInput = document.getElementById('paymentProof');
            const fileNameDisplay = document.getElementById('fileNameDisplay');

            // --- 1. Dynamic Member Visibility ---
            function updateMemberFields() {
                const size = parseInt(teamSizeSelect.value);

                // Reset visibility and 'required' status
                member3Group.style.display = 'none';
                member4Group.style.display = 'none';
                member3Input.required = false;
                member4Input.required = false;

                if (size >= 3) {
                    member3Group.style.display = 'block';
                    member3Input.required = true;
                }

                if (size === 4) {
                    member4Group.style.display = 'block';
                    member4Input.required = true;
                }
            }
            teamSizeSelect.addEventListener('change', updateMemberFields);
            updateMemberFields(); 

            // --- 2. Dynamic File Name Display ---
            paymentProofInput.addEventListener('change', function() {
                if (this.files && this.files.length > 0) {
                    fileNameDisplay.textContent = this.files[0].name;
                    fileNameDisplay.style.color = '#00ffc8'; 
                } else {
                    fileNameDisplay.textContent = 'No file chosen';
                    fileNameDisplay.style.color = '#8b949e';
                }
            });
        });

        // Global function called by the form's onsubmit attribute
        function submissionSuccess() {
            // Optional: You can reset the form fields here: document.getElementById('yourFormId').reset();
            alert("Registration submitted! Please wait for a confirmation message from Google.");
        }