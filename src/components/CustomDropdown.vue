<template>
  <div class="select">
	<div class="selectBtn" data-type="firstOption">Self</div>
	<div class="selectDropdown">
		<div class="option" data-type="1">Self</div>
		<div class="option" data-type="2">Spouse</div>
		<div class="option" data-type="3">Son</div>
		<div class="option" data-type="4">Daughter</div>
		<div class="option" data-type="5">Father</div>
		<div class="option" data-type="5">Mother</div>
		<div class="option" data-type="5">Father in law</div>
		<div class="option" data-type="5">Mother in Law</div>
	</div>
</div>
</template>

<script>
export default {
  name: 'customselect',
  props: {
    
  },
  components: {
   
  },
  data() {
    return {
      
    };
  },
  mounted() {
    const select = document.querySelectorAll('.selectBtn');
const option = document.querySelectorAll('.option');
let index = 1;

select.forEach(a => {
	a.addEventListener('click', b => {
		const next = b.target.nextElementSibling;
		next.classList.toggle('toggle');
		next.style.zIndex = index++;
	})
})
option.forEach(a => {
	a.addEventListener('click', b => {
		b.target.parentElement.classList.remove('toggle');
		
		const parent = b.target.closest('.select').children[0];
		parent.setAttribute('data-type', b.target.getAttribute('data-type'));
		parent.innerText = b.target.innerText;
	})
})
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/base/index.scss';
.select {
	position: relative;
	margin-bottom: 0px;
	width: 100%;
	border: 1px solid $input;
	border-radius: 4px;
	.selectBtn {
		background: var(--bg1);
		padding: 10px;
		box-sizing: border-box;
		border-radius: 3px;
		width: 100%;
		cursor: pointer;
		position: relative;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		background: #fff;
		font-size: $font-16;
		color: $primary;
		font-family: $font-base-med;
		&:after {
			content: "";
			position: absolute;
			top: 45%;
			right: 15px;
			width: 9px;
			height: 9px;
			-webkit-transform: translateY(-50%) rotate(45deg);
			transform: translateY(-50%) rotate(45deg);
			border-right: 2px solid #666;
			border-bottom: 2px solid #666;
			transition: 0.2s ease;
		}
		&.toggle {
			border-radius: 3px 3px 0 0;
			&:after {
				-webkit-transform: translateY(-50%) rotate(-135deg);
				transform: translateY(-50%) rotate(-135deg);
			}
		}
	}
	.selectDropdown {
		position: absolute;
		top: 100%;
		width: 100%;
		border-radius: 0 0 3px 3px;
		overflow: hidden;
		background: var(--bg1);
		border-top: 1px solid #eee;
		z-index: 1;
		background: #fff;
		-webkit-transform: scale(1, 0);
		transform: scale(1, 0);
		-webkit-transform-origin: top center;
		transform-origin: top center;
		visibility: hidden;
		transition: 0.2s ease;
		box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.option {
			padding: 5px 10px;
			box-sizing: border-box;
			cursor: pointer;
			width: 48%;
			font-size: $font-14;
			color: $grey;
			&:hover {
				background: #f8f8f8;
			}
		}
		&.toggle {
			visibility: visible;
			-webkit-transform: scale(1, 1);
			transform: scale(1, 1);
		}
	}
}

</style>
