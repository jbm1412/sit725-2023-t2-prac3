const cardList = [
    {
    title: "Banh Mi",
    image: "pics/roasted-pork-banh-mi-vietnamese-sandwitch-ddmfs-3X4-0332.jpg",
    link: "About Banh Mi",
    desciption: "In Vietnamese cuisine, bánh mì or banh mi is a short baguette with thin, crisp crust and soft, airy texture. It is often split lengthwise and filled with savory ingredients like a submarine sandwich and served as a meal."
    },
    {
    title: "Ramen",
    image: "pics/Spicy-Shoyu-Ramen-8055-I.jpg",
    link: "About Ramen",
    desciption: "Ramen is a Japanese noodle dish. It consists of Chinese-style wheat noodles served in a broth; common flavors are soy sauce and miso, with typical toppings including sliced pork, nori, menma, and scallions"
    }
    ]
   
    const addCards = (items) => {
    items.forEach(item => {
    let itemToAppend = '<div class="col s4 center-align">'+
    '<div class="card medium green"><div class="card-image waves-effect waves-block waves-light"><img class="activator" id="food" src="'+item.image+'">'+
    '</div><div class="card-content">'+
    '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#"><em class="black-text">'+item.link+'</em></a></p></div>'+
    '<div class="card-reveal green">'+
    '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
    '<p class="card-text">'+item.desciption+'</p>'+
    '</div></div></div>';
    $("#card-section").append(itemToAppend)
    });
    }
    const submitForm = () =>
{
    let formData = {}
    formData.firstname = $('#firstname').val()
    formData.lastname = $('#lastame').val()
    formData.password = $('#favfood').val()
    formData.email = $('#description').val()
    console.log("Form Submitted: ", formData);
}

    $(document).ready(function(){
    $('.materialboxed').materialbox();
    $('.modal').modal();
    addCards(cardList);
    $('#formsubmit').click(()=>{
        submitForm();
    })
    });