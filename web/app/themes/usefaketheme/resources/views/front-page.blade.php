@extends('layouts.app')

@section('content')
	<div id="__site_sections">
		@include('sections.section0_banner')
		@include('sections.section1_profile')
		@include('sections.section2_education')
		@include('sections.section3_experience')
		@include('sections.section4_abilities')
		@include('sections.section5_projects')
		@include('sections.section6_contact')
	</div>
@endsection