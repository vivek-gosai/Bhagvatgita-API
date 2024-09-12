let chapter = document.getElementById("chap");
sloka = document.getElementById("shloka");
let chapName = document.getElementById("chapterName");

const getchapter = () => {
    // console.log("hello");
    fetch('https://vedicscriptures.github.io/chapters')
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            data.forEach((element) => {
                chapter.innerHTML += `
           <div class="text-center"><button class="text-decoration-none chap-name btn fs-4 fw-bold" data-bs-toggle="modal" data-bs-target="#dataView" aria-controls="offcanvasTop" onclick="return getslok(${element.chapter_number},${element.verses_count})">${element.chapter_number}.${element.name}</button></div><br>
            <hr style="color:white;"></hr>
            `
                // console.log(element.verses_count);
            });
        }).catch((err) => {
            console.log("there is something wrong");
        })
}
getchapter();

const getslok = (no, count) => {
    console.log("NO>>", no, count);
    fetch(`https://vedicscriptures.github.io/chapter/${no}`)
        .then(res => res.json())
        .then((data) => {
            console.log("data", data);
            chapName.innerHTML = `<h1 class="modal-title border border-bottom-1 border-danger-subtle" style="font-size:52px;">${data.name}</h1> `
            let shlokas = document.getElementById('shlokas');
            shlokas.innerHTML = '';
            for (let i = 1; i <= count; i++) {
                fetch(`https://vedicscriptures.github.io/slok/${no}/${i}`)
                    .then(res => res.json())
                    .then((data) => {
                        console.log(data);
                        shlokas.innerHTML += `
                        <h5 class="offcanvas-title" id="offcanvasTopLabel"></h5>
                            <p class="text-center my-5 fw-bold">${data.slok}<p>
                            <hr></hr>
                            `
                        for (const key in data) {
                            if (Object.prototype.hasOwnProperty.call(data, key)) {
                                const element = data[key];
                            }
                        }
                    }).catch((err) => {
                        console.log("errr");
                    })
            }
        }).catch((err) => {
            console.log("there is something wrong");
        })
    // chapName.innerHTML = `<h1 class="modal-title fs-5">${Name}</h1>` ;
}
// getslok();