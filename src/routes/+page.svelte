<script lang="ts">
	import { ownerName } from '$lib/ownerName';
	import NavBar from '$lib/widgets/NavBar.svelte';
	import NavBarButton from '$lib/widgets/NavBarButton.svelte';
</script>

<svelte:head>
	<title>{ownerName}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<NavBar>
	<NavBarButton>A</NavBarButton>
	<NavBarButton>B</NavBarButton>
	<NavBarButton>C</NavBarButton>
</NavBar>

<section>
	<p>
		Brownie halvah gingerbread powder liquorice biscuit cupcake chocolate cake. Gummi bears tootsie
		roll cake fruitcake soufflé. Topping ice cream cookie marzipan icing jelly-o lollipop. Marzipan
		tart muffin marshmallow soufflé jelly. Wafer danish muffin topping cake cupcake dragée. Pastry
		candy gingerbread lemon drops chocolate. Biscuit chocolate cake jelly-o jelly beans lollipop
		toffee jujubes gummi bears. Powder wafer jelly ice cream pastry. Cake pie marzipan biscuit tart
		gingerbread jujubes sesame snaps. Brownie liquorice carrot cake muffin apple pie. Caramels
		gingerbread marzipan candy canes cake sugar plum muffin cotton candy danish. Icing ice cream
		powder chocolate cake biscuit.
	</p>
	<p>
		Macaroon tootsie roll chocolate tart sesame snaps caramels macaroon lemon drops. Dragée icing
		pastry danish bonbon lollipop. Liquorice biscuit toffee caramels muffin gummies. Wafer dragée
		brownie tiramisu cookie oat cake oat cake gingerbread marshmallow. Cookie icing topping sweet
		candy cotton candy caramels. Icing tootsie roll chocolate bar candy caramels shortbread. Halvah
		ice cream tart sweet roll sweet roll oat cake donut. Sweet dragée soufflé croissant jelly beans
		jelly muffin. Oat cake danish gummi bears jelly sweet bear claw apple pie ice cream. Ice cream
		croissant gummies apple pie chocolate cake bonbon candy canes carrot cake. Cheesecake chocolate
		dessert marzipan pie lollipop. Wafer cupcake halvah lemon drops icing lemon drops topping
		marzipan. Halvah wafer jelly caramels jujubes jelly-o lemon drops. Marzipan cake muffin cupcake
		cupcake.
	</p>
	<p>
		Jelly-o fruitcake liquorice oat cake toffee icing chocolate bar bear claw soufflé. Tiramisu
		jelly marzipan marzipan danish candy powder dragée. Macaroon cheesecake bear claw halvah
		shortbread gummies jelly beans biscuit. Gummies pudding gummies fruitcake croissant cookie
		halvah. Topping pie dessert oat cake tart chocolate bar carrot cake jelly-o. Dragée fruitcake
		cookie brownie donut pastry brownie danish. Shortbread chocolate cake sesame snaps muffin lemon
		drops ice cream lemon drops. Danish marzipan donut dessert carrot cake bonbon lemon drops wafer.
		Ice cream halvah dessert pie sugar plum gingerbread gummi bears chocolate bar. Dragée tootsie
		roll candy canes toffee lollipop gummies oat cake cake. Oat cake pastry bear claw macaroon
		lollipop caramels. Pudding bear claw croissant danish caramels icing gingerbread wafer. Pie cake
		jelly beans marshmallow wafer.
	</p>
	<p>
		Pastry ice cream cheesecake biscuit dessert sugar plum. Bear claw marzipan candy canes jelly
		beans powder tootsie roll candy canes. Chupa chups lollipop jujubes topping cupcake. Wafer
		cookie lollipop apple pie ice cream ice cream jujubes oat cake cookie. Gummi bears toffee
		tootsie roll marzipan liquorice jujubes. Sugar plum oat cake macaroon chocolate candy chocolate
		dessert oat cake. Oat cake icing chocolate cheesecake sesame snaps jelly jelly beans
		gingerbread. Cookie lollipop brownie marshmallow bonbon biscuit cupcake. Ice cream oat cake
		marzipan sugar plum marzipan cake candy candy canes. Powder muffin lemon drops cotton candy
		jelly beans. Croissant oat cake chocolate bar cake halvah liquorice. Jelly beans dragée cookie
		brownie topping pudding. Cake macaroon caramels bonbon bonbon tootsie roll shortbread tootsie
		roll candy.
	</p>
	<p>
		Chocolate cake chocolate cake jelly chupa chups. Icing wafer lollipop cupcake toffee jujubes
		jujubes. Jelly chocolate cake tootsie roll sugar plum oat cake. Danish apple pie cake
		gingerbread powder shortbread brownie sugar plum. Lemon drops powder gingerbread topping oat
		cake gummies shortbread danish wafer. Soufflé marshmallow muffin jujubes brownie. Gummies
		tootsie roll croissant toffee cookie apple pie. Tiramisu cake jelly-o chocolate pie. Sweet
		chocolate bar gummi bears sweet shortbread chocolate cake tiramisu. Sugar plum sweet cookie cake
		sugar plum pudding. Sweet chocolate bar tart cotton candy dragée cotton candy bonbon. Brownie
		tart dragée toffee tiramisu.
	</p>
</section>

<style lang="scss">
	section {
		padding-top: var(--safe-area-top);
		padding-right: var(--safe-area-right);
		padding-bottom: var(--safe-area-bottom);
		padding-left: var(--safe-area-left);
	}
</style>
