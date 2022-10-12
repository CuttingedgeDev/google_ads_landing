// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//         document.getElementById("navbar").style.backgroundColor = "#F5FAFF";
//     } else {
//         document.getElementById("navbar").style.backgroundColor = "#161D37";

//     }
// }


// start Mobile menu
function openNav() {
    document.getElementById("navBar").style.display = "block";
    document.getElementById("mobileMenu").style.width = "100%";
    document.getElementById("mainMenu").style.display = "none";
    // document.getElementById("navMenu").style.display = "block";

}

function closeNav() {
    document.getElementById("navBar").style.display = "none";
    document.getElementById("mobileMenu").style.width = "0%";
    document.getElementById("mainMenu").style.display = "block";
}
// End Mobile menu


// start accordion function
const Default = {
	alwaysOpen: false,
	activeClasses: 'border-b-[0.0625rem] border-solid border-[#B7BCC8] bg-white shadow-[-5.7px_0_14.6px_rgba(35,49,148,0.1)]',
	inactiveClasses: 'border-b-[0.0625rem] border-solid border-[#B7BCC8] pb-8',
	targetActiveClasses: 'bg-white border-b-4 border-[#EA7E32] border-solid shadow-[-5.7px_6.8px_14.6px_rgba(35,49,148,0.1)]',
	onOpen: () => { },
	onClose: () => { },
	onToggle: () => { }
}

class Accordion {
	constructor(items = [], options = {}) {
		this._items = items
		this._options = { ...Default, ...options }
		this._init()
	}

	_init() {
		if (this._items.length) {
			// show accordion item based on click
			this._items.map(item => {

				if (item.active) {
                    const key = item.id.split('-')[0];
                    if (key === '#mobile_nav_accordion') {
                        this.close(item.id)
                    } else {
                        this.open(item.id)
                    }
				}

				item.triggerEl.addEventListener('click', () => {
					this.toggle(item.id)
				})
			})
		}
	}

	getItem(id) {
		return this._items.filter(item => item.id === id)[0]
	}

	open(id) {
		const item = this.getItem(id)
		const key = id.split('-')[0];
		// don't hide other accordions if always open
		if (!this._options.alwaysOpen) {
			this._items.map(i => {
				if (i !== item) {
					if (key === '#why_accordion') {
						i.triggerEl.classList.remove(...this._options.activeClasses.split(" "))
						i.triggerEl.classList.add(...this._options.inactiveClasses.split(" "))
						i.targetEl.classList.remove(...this._options.targetActiveClasses.split(" "))
					} 
					// i.targetEl.classList.add('hidden')
					
					const parent = document.querySelector(i.id);
					const div = parent.parentNode;
					// div.classList.remove('h-full')
					// div.classList.add('h-0')
					const divId = ('#' + div.id)
					console.log(divId)
					// document.getElementById(div.id).style.height= '0%'
					document.getElementById(i.id.split('#')[1]).style.height = '0%';
					document.getElementById(i.id.split('#')[1]).style.position = 'fixed';

					i.triggerEl.setAttribute('aria-expanded', false)
					i.active = false
					// rotate icon if set
					if (i.iconEl) {
                        // if (key === '#mobile_nav_accordion') {
                        //     i.iconEl.classList.remove('-rotate-90')
                        // } else {
                            i.iconEl.classList.remove('rotate-180')
                        // }
                    }

                    if (i.iconEl) {
						i.iconEl.classList.remove('rotate-180')
					}
				}
			})
		}

		// show active item
		if (key === '#why_accordion') {
			item.triggerEl.classList.add(...this._options.activeClasses.split(" "))
			item.triggerEl.classList.remove(...this._options.inactiveClasses.split(" "))
			item.targetEl.classList.add(...this._options.targetActiveClasses.split(" "))
		}
		item.triggerEl.setAttribute('aria-expanded', true)
		// item.targetEl.classList.remove('hidden')
		
		const parent = document.querySelector(id);
		const div = parent.parentNode;
		// div.classList.add('h-full')
		// div.classList.remove('h-0')
		const divId = ('#' + div.id)
		console.log(divId)
		// document.getElementById(div.id).style.height= '100%'
		document.getElementById(id.split('#')[1]).style.height = '100%';
		document.getElementById(id.split('#')[1]).style.position = 'relative';
		item.active = true
        console.log('open')
        console.log(id)


		// rotate icon if set
		if (item.iconEl) {
            // if (key === '#mobile_nav_accordion') {
                // item.iconEl.classList.add('-rotate-90')
            // } else {
                item.iconEl.classList.add('rotate-180')
            // }
		}

        // if (item.iconEl) {
		// 	item.iconEl.classList.add('rotate-180')
		// }

		// callback function
		this._options.onOpen(this, item)
	}

	toggle(id) {
		const item = this.getItem(id)

		if (item.active) {
			this.close(id)
		} else {
			this.open(id)
		}

		// callback function
		this._options.onToggle(this, item)
	}

	close(id) {
		const item = this.getItem(id)
		const key = id.split('-')[0];
		if (key === '#why_accordion') {
			item.triggerEl.classList.remove(...this._options.activeClasses.split(" "))
			item.triggerEl.classList.add(...this._options.inactiveClasses.split(" "))
			item.targetEl.classList.remove(...this._options.targetActiveClasses.split(" "))
		}
		// item.targetEl.classList.add('hidden')

		const parent = document.querySelector(id);
		const div = parent.parentNode;
		const divId = ('#' + div.id)
		console.log(divId)
		// document.getElementById(div.id).style.height= '0%'
		// div.classList.remove('h-full')
		// div.classList.add('h-0')
		document.getElementById(id.split('#')[1]).style.height = '0%';
		document.getElementById(id.split('#')[1]).style.position = 'fixed';
		

		item.triggerEl.setAttribute('aria-expanded', false)
		item.active = false

		// rotate icon if set
		if (item.iconEl) {
            // if (key === '#mobile_nav_accordion') {
            //     item.iconEl.classList.remove('-rotate-90')
            // } else {
                item.iconEl.classList.add('rotate-180')
            // }
		}

        // if (item.iconEl) {
			item.iconEl.classList.remove('rotate-180')
		// }

		// callback function
		this._options.onClose(this, item) 			
	}

}

window.Accordion = Accordion;

function initAccordion() {
	document.querySelectorAll('[data-accordion]').forEach(accordionEl => {

		const alwaysOpen = accordionEl.getAttribute('data-accordion')
		const activeClasses = accordionEl.getAttribute('data-active-classes')
		const inactiveClasses = accordionEl.getAttribute('data-inactive-classes')

		const items = []
		accordionEl.querySelectorAll('[data-accordion-target]').forEach(el => {
			const item = {
				id: el.getAttribute('data-accordion-target'),
				triggerEl: el,
				targetEl: document.querySelector(el.getAttribute('data-accordion-target')),
				iconEl: el.querySelector('[data-accordion-icon]'),
				active: el.getAttribute('aria-expanded') === 'true' ? true : false
			}
			items.push(item)
		})

		new Accordion(items, {
			alwaysOpen: alwaysOpen === 'open' ? true : false,
			activeClasses: activeClasses ? activeClasses : Default.activeClasses,
			inactiveClasses: inactiveClasses ? inactiveClasses : Default.inactiveClasses
		})
	})
}

if (document.readyState !== 'loading') {
	// DOMContentLoaded event were already fired. Perform explicit initialization now
	initAccordion()
} else {
	// DOMContentLoaded event not yet fired, attach initialization process to it
	document.addEventListener('DOMContentLoaded', initAccordion)
}

// End accordion function 

