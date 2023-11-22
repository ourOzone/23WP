const newHeader = document.createElement('header');
newHeader.id = 'headerContent';
document.body.appendChild(newHeader);

const newFooter = document.createElement('footer');
newFooter.id = 'footerContent';
document.body.appendChild(newFooter);



fetch('../template.html')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data, 'text/html');
        
        // 헤더 불러오기
        const headerContent = htmlDoc.querySelector('header').innerHTML;
        document.getElementById('headerContent').innerHTML = headerContent;

        // 푸터 불러오기
        const footerContent = htmlDoc.querySelector('footer').innerHTML;
        document.getElementById('footerContent').innerHTML = footerContent;

        console.log(document.body.innerHTML);

    });
