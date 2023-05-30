const trLength = document.getElementsByTagName('tr').length;
document.getElementById('records-lenght').innerText = 'Сейчас рекордов на уровне: ' + (trLength - 1);