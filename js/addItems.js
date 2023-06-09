class AddItems {
    dlIter = 1;

    addLevel(lvlname, username, id) {
        id = '00' + id;
        id = id.substr(-3);
        const list = document.querySelector('.dl-list');
        const listItem = document.createElement('li');
        listItem.onclick = () => {
            window.location.href = './lvls/' + id + '.html';
        }
        list.appendChild(listItem);

        const img = document.createElement('img');
        img.src = './img/lvls/' + id + '.png';
        img.alt = '';
        listItem.appendChild(img);

        const itemText = document.createElement('div');
        itemText.className = 'dl-item-txt';
        listItem.appendChild(itemText);

        const header = document.createElement('h2');
        const headerText = document.createTextNode(`#${this.dlIter} - ${lvlname}`);
        header.appendChild(headerText);
        itemText.appendChild(header);

        const author = document.createElement('p');
        const authorText = document.createTextNode(`By ${username}`);
        author.appendChild(authorText);
        itemText.appendChild(author);

        this.dlIter++;
    }

    addAdmin(nickname, role, src, ds) {
        const list = document.querySelector('.contacts-items');
        const listItem = document.createElement('li');
        list.appendChild(listItem);

        const img = document.createElement('img');
        img.src = src;
        img.alt = '';
        listItem.appendChild(img);

        const itemText = document.createElement('div');
        listItem.appendChild(itemText);

        const header = document.createElement('h2');
        const headerText = document.createTextNode(`${nickname} - ${role}`);
        header.appendChild(headerText);
        itemText.appendChild(header);

        const author = document.createElement('p');
        const authorText = document.createTextNode(`Discord: ${ds}`);
        author.appendChild(authorText);
        itemText.appendChild(author);
    }

    addRateRull(type, information) {
        let h3Text;
        let homeContent;
        switch(type) {
            case 'dl':
                h3Text = 'Для демонлиста:';
                homeContent = document.querySelector('main .dl-rate-info');
                break;
            case 'cl':
                h3Text = 'Для челенджлиста:';
                homeContent = document.querySelector('main .cl-rate-info');
                break;
            case 'ill':
                h3Text = 'Для импосибл левел листа:'
                homeContent = document.querySelector('main .ill-rate-info');
                break;
            default:
                console.error('Type is undefined');
                break;
        }

        const header = document.createElement('h3');
        const headerText = document.createTextNode(h3Text);
        header.appendChild(headerText);
        homeContent.appendChild(header);

        const ol = document.createElement('ol');
        homeContent.appendChild(ol);

        information = information.split(';');
        for(let i = 0; i < information.length; i++) {
            const li = document.createElement('li');
            ol.appendChild(li);
    
            const p = document.createElement('p');
            const ruleText = document.createTextNode(information[i]);
            p.appendChild(ruleText);
            li.appendChild(p);
            let innerText = p.innerText;
            p.innerText = i + 1 + '. ' + innerText;
        }
    }

    addUpdate(h2Text, information) {
        const updatePageBlock = document.querySelector('.update-content');
        const newUpdateBlock = document.createElement('div');
        newUpdateBlock.className = 'update-item';
        updatePageBlock.appendChild(newUpdateBlock);

        const header = document.createElement('h2');
        const headerText = document.createTextNode(h2Text);
        header.appendChild(headerText);
        newUpdateBlock.appendChild(header);

        const changesList = document.createElement('ol');
        changesList.className = 'update-list';
        newUpdateBlock.appendChild(changesList);

        information = information.split(';');
        for(let i = 0; i < information.length; i++) {
            const listItem = document.createElement('li');
            changesList.appendChild(listItem);

            const text = document.createElement('p');
            const textText = document.createTextNode(information[i]);
            text.appendChild(textText);
            listItem.appendChild(text);
            let innerText = text.innerText;
            text.innerText = i + 1 + '. ' + innerText;
        }
    }

    addRecord(lvlid, username, record, url, typeurl) {
        let local = window.location.href;
        local = local.slice(0, -5).substr(-3);
        if('0' + lvlid != local) return;

        const table = document.querySelector('table');
        const tr = document.createElement('tr');
        table.appendChild(tr);

        const td1 = document.createElement('td');
        const nodeText1 = document.createTextNode(username);
        td1.appendChild(nodeText1);
        tr.appendChild(td1);

        const td2 = document.createElement('td');
        const text2 = document.createElement('h5');
        const nodeText2 = document.createTextNode(record);
        td2.appendChild(nodeText2);
        tr.appendChild(td2);

        const td3 = document.createElement('td');

        const text3 = document.createElement('a');
        text3.href = url;
        const nodeText3 = document.createTextNode(typeurl);
        text3.appendChild(nodeText3);
        td3.appendChild(text3);
        tr.appendChild(td3);
    }
}
