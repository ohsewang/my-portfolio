const sectionIds = ['#home','#about','#skills','#work','#testimonial','#contact'];

const sections = sectionIds.map((id) => document.querySelector(id)); 
console.log("sections" , sections)
const navItem = sectionIds.map((id) => document.querySelector(`[href="${id}"]`));
console.log("navItem" , navItem)



