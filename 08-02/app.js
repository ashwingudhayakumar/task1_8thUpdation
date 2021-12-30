const row=document.querySelector('#row');
const column=document.querySelector('#column');
const form=document.querySelector('form');
const image=document.querySelector('.icon');
const table=document.querySelector('.tables');

form.addEventListener("submit",function(e){
	
	e.preventDefault();
	let tr;
	for(let i=0;i<parseInt(row.value);i++){
		tr=document.createElement('tr');
		let td;
		for(let j=0;j<parseInt(column.value);j++){
			td=document.createElement('td');
			td.style.background=`url(images/small_thumbnails.png) no-repeat ${-j*80}px ${-i*58}px`;
			td.style.width='75px';
			td.style.height='53px';
			tr.append(td);
		}
		table.append(tr);
	}
	
	
});

