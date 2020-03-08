/*
|--------------------------------------------------------------------------
| APP Setup
|--------------------------------------------------------------------------
*/
	// Node Modules
	const body_parser = require( 'body-parser' );
	const express = require( 'express' );

	// Primary Variable
	const app = express();

/*
|--------------------------------------------------------------------------
| APP Init
|--------------------------------------------------------------------------
*/
	// Parse request of content-type - application/x-www-form-urlencoded
	app.use( body_parser.urlencoded( { extended: false } ) );

	// Parse request of content-type - application/json
	app.use( body_parser.json() );

	// Service Port
	app.listen( 4001, () => {
		console.log( "Server run on 4001" )
	} );

	// Routing
	app.get( '/', function( req, res ) {
		return res.json( {
			"message": "Kube Service One"
		} );
	} );