window.onload = function () {
    const allInputsNodes = document.querySelectorAll("input");
    const rocket = document.querySelector(".rocket");

    const passwordInputsArray = Array.from(allInputsNodes).slice(0, 2);
    const businessLogicInputsArray = Array.from(allInputsNodes).slice(2, allInputsNodes.length - 1);
    const launchBtn = allInputsNodes[allInputsNodes.length - 1];
    const passwordInput = passwordInputsArray[0];
    const passwordSubmitBtn = passwordInputsArray[1];
    let countOfReadyStages = 0;

    let isUserLoggedIn = false;
    const correctPassword = "TrustNo1";

    passwordSubmitBtn.addEventListener('click', checkPassword);
    businessLogicInputsArray.forEach(el =>
        el.onchange = checkStagesForReady);

    launchBtn.addEventListener("click", launchRocket);

    toggleDisabledAttrOnInputArray(businessLogicInputsArray);
    launchBtn.toggleAttribute("disabled");


    function toggleDisabledAttrOnInputArray(inputArray) {
        inputArray.forEach((ie) => {
            ie.toggleAttribute("disabled");
        });
    }

    function checkPassword() {
        passwordSubmitBtn.toggleAttribute("disabled");
        if (passwordInput.value === correctPassword && !isUserLoggedIn) {
            toggleDisabledAttrOnInputArray(businessLogicInputsArray);
            isUserLoggedIn = true;
        }
        passwordSubmitBtn.toggleAttribute("disabled");
    }

    function checkStagesForReady(event) {
        const value = event?.target.value;
        if (!value){
            return;
        }
        if (value === "1") {
            countOfReadyStages++;
        } else {
            countOfReadyStages--;
        }
        if (countOfReadyStages === businessLogicInputsArray.length) {
            launchBtn.toggleAttribute("disabled");
        } else {
            if (!launchBtn.attributes?.disabled) {
                launchBtn.toggleAttribute("disabled");
            }
        }
    }

    function launchRocket(event) {
        event.target.toggleAttribute("disabled");
        rocket.classList.add("fly-to-top")
    }

};


