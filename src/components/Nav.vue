<template>
	<nav>
		<ul>
			<li><router-link to="/news">News</router-link></li>
			<li><router-link to="/menu">Menu</router-link></li>
			<li><router-link to="/faq">Faq</router-link></li>
			<li><router-link to="/contact">Contact</router-link></li>
		</ul>
	</nav>
</template>

<style scoped>
nav {
	ul {
		display: flex;
	}
}
</style>