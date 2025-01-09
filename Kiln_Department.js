

const mouseover1 = document.querySelector('.tiles_picture1');
const mouseover2 = document.querySelector('.tiles_picture2');

const wall_tiles = document.querySelector('.wall_tiles');
const out_put = document.querySelector('.out_put');

const floor_tiles = document.querySelector('.floor_tiles');

mouseover1.addEventListener('mouseover', function () {
	console.log('rakib');
	/*if(wall_tiles && out_put){
		out_put.innerHTML = wall_tiles.innerHTML;
    out_put.style.display = 'block'; 
	out_put.style.color='red';
	}*/
    
});

mouseover1.addEventListener('mouseout', function () {
   // out_put.style.display = 'none';
});

//console.log(mouseover2, mouseover1, wall_tiles, floor_tiles);
