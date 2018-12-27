@extends('layouts.app')

@section('content')
	<div class="container __404-page">
		<div class="row h-100 justify-content-center align-items-center">
			<div class="col text-center">
				<h2>404</h2>
			  	<div class="__error-wrapper">
			      <p>{{ __('Sorry, but the page you were trying to view does not exist.', 'sage') }}</p>
			    </div>
         		<div class="__button-wrapper">
			        <a href="{{ home_url('/') }}" class="text-uppercase __button-404">Return to Homepage</a>
			    </div>
		    </div>
		</div>
	</div>
@endsection
