var screenState = 'laptop';
var state = 0;
const x = document.getElementsByTagName('BODY')[0] // Select body tag because of disable scroll when modal is active
const modal = document.getElementById('modal') // modal
// const modalBtn = document.getElementById('modal-button') // launch modal button
const modalClose = document.getElementsByClassName('modal-close') // close modal button


function resizeFunc() {
  var w = window.outerWidth;
  var h = window.outerHeight;
  if (w > 767 & state == 0) { 
    state = 1;
    screenState = 'laptop';
    // document.getElementById('budgetPanel').classList.remove('hidden');


  } else if (w < 767 & state == 1) {
    state = 0;
    screenState = 'mobile';
    document.getElementById('followDemo').classList.add('hidden');
  }
}

const rangeInputs = document.querySelectorAll('input[type="range"]')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('rangeValueBar')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
  currentLeads =  document.getElementById('leadsGenerate').value;
  if (currentLeads == 100000 & screenState == 'laptop') {
    console.log('max');
    document.getElementById('budgetPanel').classList.add('hidden');
    document.getElementById('budgetPanel').classList.remove('md:block');
    document.getElementById('followDemo').classList.remove('hidden');
  } else if(screenState == 'laptop') {
    document.getElementById('budgetPanel').classList.remove('hidden');
    document.getElementById('followDemo').classList.add('hidden');
  } else if(currentLeads == 100000 & screenState == 'mobile') {
    // document.getElementById('budgetPanel').classList.add('hidden');
    modal.style.display = "flex"; // Show modal
    x.style.overflow = "hidden"; //Disable scroll on body
  }
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})

function cal_budget() {
  var budget = 0;
  var leads = document.getElementById('leadsGenerate').value;
  var ratio = document.getElementById('leaseRatio').value;
  var rate = document.getElementById('conversionRate').value
  // if (leads == 0) {
  //   // document.getElementById('leadsGenerate').focus();
  //   // alert('Set the leads to generate');
  // } else if (ratio == 0) {
  //   // alert('Set the lease ratio');
  // } else if (rate == 0) {
  //   // alert('Set the conversion rate')
  // } else {
    budget = Math.ceil( leads * ratio / rate);
    // alert(budget);
    document.getElementById('monthlyBudget').textContent=budget;

    // document.getElementById('budgetPanel').classList.add('hidden');
    // document.getElementById('budgetPanel').classList.add('md:block');
    // document.getElementById('followDemo').classList.add('hidden');

    if (screenState == 'mobile') {
      document.getElementById('calculator').classList.add('hidden');
      document.getElementById('budgetPanel').classList.remove('hidden');
      document.getElementById('btn_back').classList.remove('hidden');

    }
  // }
}

function back() {
  document.getElementById('calculator').classList.remove('hidden');
  document.getElementById('budgetPanel').classList.add('hidden');
  document.getElementById('btn_back').classList.add('hidden');
}

if ( window.outerWidth > 767) {
  screenState = 'laptop';  
} else {
  screenState = 'mobile';  
}



// Open modal
// modalBtn.onclick = function () {
//         modal.style.display = "flex"; // Show modal
//         x.style.overflow = "hidden"; //Disable scroll on body
// }

// Select and trigger all close buttons
for (var i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener('click', function () {
        modal.style.display = "none"; // Hide modal
        x.style.overflow = "auto"; // Active scroll on body
    })
}

// Close modal when click away from modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Hide modal
        x.style.overflow = "auto"; // Active scroll on body
    }
}