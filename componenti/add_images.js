export function add_images(imgUrl) {
    console.log(imgUrl)
    const carouselInner = document.querySelector('#carousel');
    let html="";
    imgUrl.forEach((img,index)=> {
        console.log(img,img.name)
        if (index===0){
            html += `
        <div class="carousel-item active">
            <img src=".${img.name}" class="d-block w-100" alt="Image">
        </div>
    `;
        }else
        {html += `
        <div class="carousel-item">
            <img src=".${img.name}" class="d-block w-100" alt="Image">
        </div>
    `;}
    }); 
    console.log(html)
    carouselInner.innerHTML = html;
}