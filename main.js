// FAQ Accordian open close
document.addEventListener ('DOMContentLoaded',function(){
    const faqContainer = document.querySelector('.faq-content')
    faqContainer.addEventListener('click',function(e) {
       const groupHeader = e.target.closest('.faq-group-header');
       if(!groupHeader) return;
       const group = groupHeader.parentElement;
       const groupBody = group.querySelector('.faq-group-body')
       const icon = groupHeader.querySelector('i')
    //    toggle icon
    icon.classList.toggle('fa-plus')
    icon.classList.toggle('fa-minus')
    // Toggle Visibility of Body
    groupBody.classList.toggle('open')
    })
})