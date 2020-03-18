<script>
//import dependencies
	import Renderheader from './components/Renderheader.svelte';
	import Renderproducts from './components/Renderproducts.svelte';
	// import Rendercoinvalues from './components/Rendercoinvalues.svelte';
	import Footer from './components/Footer.svelte';

</script>
<svelte:head>
<link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap" rel="stylesheet">
</svelte:head>
<main>
<!-- Render all the necessary components in the main element -->
<Renderheader />
<Renderproducts />
<Footer />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		font-family: 'Playfair Display';
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	.header {

	}
	.product-container {
	  font-family: 'Playfair Display';
	}

	.nav-logo {
	  padding: 10px;
	}
	.nav-company-name {
	  color: #1a4855;
	  font-family: "pacifico" !important;
	}
	.nav-company-slogan {
	  font-family: 'Playfair Display';
	}
	/* ----------- iPhone 4 and 4S ----------- */

	/* Portrait and Landscape */
	@media only screen
	  and (min-device-width: 320px)
	  and (max-device-width: 480px)
	  and (-webkit-min-device-pixel-ratio: 2) {
			main {
				width: 100%;
			}
	}

	/* Portrait */
	@media only screen
	  and (min-device-width: 320px)
	  and (max-device-width: 480px)
	  and (-webkit-min-device-pixel-ratio: 2)
	  and (orientation: portrait) {
			main {
				width: 100%;
			}
	}

	/* Landscape */
	@media only screen
	  and (min-device-width: 320px)
	  and (max-device-width: 480px)
	  and (-webkit-min-device-pixel-ratio: 2)
	  and (orientation: landscape) {
			main {
				width: 100%;
			}
	}

	/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */

	/* Portrait and Landscape */
	@media only screen
	  and (min-device-width: 320px)
	  and (max-device-width: 568px)
	  and (-webkit-min-device-pixel-ratio: 2) {
			main {
				width: 100%;
			}
	}

	/* Portrait */
	@media only screen
	  and (min-device-width: 320px)
	  and (max-device-width: 568px)
	  and (-webkit-min-device-pixel-ratio: 2)
	  and (orientation: portrait) {
			main {
				width: 100%;
			}
	}

	/* Landscape */
	@media only screen
	  and (min-device-width: 320px)
	  and (max-device-width: 568px)
	  and (-webkit-min-device-pixel-ratio: 2)
	  and (orientation: landscape) {
			main {
				width: 100%;
			}
	}

	/* ----------- iPhone 6, 6S, 7 and 8 ----------- */

	/* Portrait and Landscape */
	@media only screen
	  and (min-device-width: 375px)
	  and (max-device-width: 667px)
	  and (-webkit-min-device-pixel-ratio: 2) {
			main {
				width: 100%;
			}
	}

	/* Portrait */
	@media only screen
	  and (min-device-width: 375px)
	  and (max-device-width: 667px)
	  and (-webkit-min-device-pixel-ratio: 2)
	  and (orientation: portrait) {
			main {
				width: 100%;
			}
	}

	/* Landscape */
	@media only screen
	  and (min-device-width: 375px)
	  and (max-device-width: 667px)
	  and (-webkit-min-device-pixel-ratio: 2)
	  and (orientation: landscape) {
			main {
				width: 100%;
			}
	}

	/* ----------- iPhone 6+, 7+ and 8+ ----------- */

	/* Portrait and Landscape */
	@media only screen
	  and (min-device-width: 414px)
	  and (max-device-width: 736px)
	  and (-webkit-min-device-pixel-ratio: 3) {
			main {
				width: 100%;
			}
	}

	/* Portrait */
	@media only screen
	  and (min-device-width: 414px)
	  and (max-device-width: 736px)
	  and (-webkit-min-device-pixel-ratio: 3)
	  and (orientation: portrait) {
			main {
				width: 100%;
			}
	}

	/* Landscape */
	@media only screen
	  and (min-device-width: 414px)
	  and (max-device-width: 736px)
	  and (-webkit-min-device-pixel-ratio: 3)
	  and (orientation: landscape) {
			main {
				width: 100%;
			}
	}

	/* ----------- iPhone X ----------- */

	/* Portrait and Landscape */
	@media only screen
	  and (min-device-width: 375px)
	  and (max-device-width: 812px)
	  and (-webkit-min-device-pixel-ratio: 3) {
			main {
				width: 100%;
			}
	}

	/* Portrait */
	@media only screen
	  and (min-device-width: 375px)
	  and (max-device-width: 812px)
	  and (-webkit-min-device-pixel-ratio: 3)
	  and (orientation: portrait) {
			main {
				width: 100%;
			}
	}

	/* Landscape */
	@media only screen
	  and (min-device-width: 375px)
	  and (max-device-width: 812px)
	  and (-webkit-min-device-pixel-ratio: 3)
	  and (orientation: landscape) {
			main {
				width: 100%;
			}
	}
	/* ----------- iPad 1, 2, Mini and Air ----------- */

	/* Portrait and Landscape */
	@media only screen
	  and (min-device-width: 768px)
	  and (max-device-width: 1024px)
	  and (-webkit-min-device-pixel-ratio: 1) {
			main {
				width: 100%;
			}
	}

	/* Portrait */
	@media only screen
	  and (min-device-width: 768px)
	  and (max-device-width: 1024px)
	  and (orientation: portrait)
	  and (-webkit-min-device-pixel-ratio: 1) {
			main {
				width: 100%;
			}
	}

	/* Landscape */
	@media only screen
	  and (min-device-width: 768px)
	  and (max-device-width: 1024px)
	  and (orientation: landscape)
	  and (-webkit-min-device-pixel-ratio: 1) {
			main {
				width: 100%;
			}
	}

	/* ----------- iPad 3, 4 and Pro 9.7" ----------- */

	/* Portrait and Landscape */
	@media only screen
	  and (min-device-width: 768px)
	  and (max-device-width: 1024px)
	  and (-webkit-min-device-pixel-ratio: 2) {
			main {
				width: 100%;
			}
	}

	/* Portrait */
	@media only screen
	  and (min-device-width: 768px)
	  and (max-device-width: 1024px)
	  and (orientation: portrait)
	  and (-webkit-min-device-pixel-ratio: 2) {
			main {
				width: 100%;
			}
	}

	/* Landscape */
	@media only screen
	  and (min-device-width: 768px)
	  and (max-device-width: 1024px)
	  and (orientation: landscape)
	  and (-webkit-min-device-pixel-ratio: 2) {
			main {
				width: 100%;
			}
	}

	/* ----------- iPad Pro 10.5" ----------- */

	/* Portrait and Landscape */
	@media only screen
	  and (min-device-width: 834px)
	  and (max-device-width: 1112px)
	  and (-webkit-min-device-pixel-ratio: 2) {
			main {
				width: 100%;
			}
	}

	/* Portrait */
	/* Declare the same value for min- and max-width to avoid colliding with desktops */
	/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
	@media only screen
	  and (min-device-width: 834px)
	  and (max-device-width: 834px)
	  and (orientation: portrait)
	  and (-webkit-min-device-pixel-ratio: 2) {
			main {
				width: 100%;
			}
	}

	/* Landscape */
	/* Declare the same value for min- and max-width to avoid colliding with desktops */
	/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
	@media only screen
	  and (min-device-width: 1112px)
	  and (max-device-width: 1112px)
	  and (orientation: landscape)
	  and (-webkit-min-device-pixel-ratio: 2) {
			main {
				width: 100%;
			}
	}

	/* ----------- iPad Pro 12.9" ----------- */

	/* Portrait and Landscape */
	@media only screen
	  and (min-device-width: 1024px)
	  and (max-device-width: 1366px)
	  and (-webkit-min-device-pixel-ratio: 2) {
			main {
				width: 100%;
			}
	}

	/* Portrait */
	/* Declare the same value for min- and max-width to avoid colliding with desktops */
	/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
	@media only screen
	  and (min-device-width: 1024px)
	  and (max-device-width: 1024px)
	  and (orientation: portrait)
	  and (-webkit-min-device-pixel-ratio: 2) {
			main {
				width: 100%;
			}
	}

	/* Landscape */
	/* Declare the same value for min- and max-width to avoid colliding with desktops */
	/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
	@media only screen
	  and (min-device-width: 1366px)
	  and (max-device-width: 1366px)
	  and (orientation: landscape)
	  and (-webkit-min-device-pixel-ratio: 2) {
			main {
				width: 100%;
			}
	}
</style>
