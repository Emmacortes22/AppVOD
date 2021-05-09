//If the server doesn't work you can uncommented this array of objects and commented the lines 12, 13, 14 and 15.
// const videos = [
//     { "img": "https://picsum.photos/350/250/?random&t=", "title": "Title1", "owner": "Owner1" },
//     { "img": "https://picsum.photos/350/250/?random&t=", "title": "Title2", "owner": "Owner2" },
//     { "img": "https://picsum.photos/350/250/?random&t=", "title": "Title3", "owner": "Owner3" },
//     { "img": "https://picsum.photos/350/250/?random&t=", "title": "Title4", "owner": "Owner4" },
//     { "img": "https://picsum.photos/350/250/?random&t=", "title": "Title5", "owner": "Owner5" },
//     { "img": "https://picsum.photos/350/250/?random&t=", "title": "Title6", "owner": "Owner6" },
//     { "img": "https://picsum.photos/350/250/?random&t=", "title": "Title7", "owner": "Owner7" },
//     { "img": "https://picsum.photos/350/250/?random&t=", "title": "Title8", "owner": "Owner8" }
// ];
fetch('http://localhost:3000/videos')
.then(response => response.json())
.then(function(data) {
    let videos = data;
    const div_videos = document.getElementById('videos');

    for (const video in videos) {
        //Create news elements
        const div_video = document.createElement('div');
        const img_video = document.createElement('img');
        const title_video = document.createElement('h5');
        const owner_video = document.createElement('p');
        //Edit the new elements and add to div
        div_video.classList.add('col-xl-3', 'col-lg-4', 'col-sm-6', 'col-12', 'video');
        img_video.src = videos[video].img + Math.random();
        img_video.classList.add('mb-1');
        title_video.append(videos[video].title);
        owner_video.append(videos[video].owner);
        owner_video.classList.add('mb-5');
        div_video.appendChild(img_video);
        div_video.appendChild(title_video);
        div_video.appendChild(owner_video);
        div_videos.appendChild(div_video);
    }

    const img_videos = document.querySelectorAll('.video img');
    //Function to add event listener in all videos 
    for (const video of img_videos) {
        video.addEventListener('click', function () {
            alert('Video clicked!');
        });
    }
})
.catch(function(error) {
    console.log(error);
});

