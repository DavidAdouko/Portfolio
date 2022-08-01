@extends('layouts.app')

@section('content')
<div class="container">
@if (session()->has('error'))
    <div class="alert alert-danger">
        {{ session()->get('error')}}
    </div>
    @endif
<div class="row justify-content-center">
        <div class="col-md-8 ">
        <form method="post" action="{{ route('search') }}" onsubmit="search(event)" id="searchForm">
            @csrf
            <div class="form-group m-5 d-flex justify-content-evenly ">
                <input type="text" class="form-control " id="words">
                <button type="submit" class="btn btn-primary ">Rechercher</button>
            </div>
        </form>
        <div id="results">
        <!-- variable ads integrer dans notre vu -->
        @foreach($ads as $ad)
        <div class="card mb-3 shadow p-3 mb-5 bg-body rounded" style="width: 100%;">
    <img class="card-img-top" src="https://via.placeholder.com/350x150" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">{{$ad->title}}</h5>
        <small>{{ Carbon\Carbon::parse($ad->created_at)->diffForHumans() }}</small>
        <p class="card-text text-info">{{ $ad->localisation }}</p>
        <p class="card-text"> {{ $ad->description }}</p>
        <a href="#" class="btn btn-primary">Voir l'annonce</a>
        <a href="{{ url('delete-ad/' .$ad->id) }}" type="submit" class="btn btn-primary">Supprimer</a>
    </div>
    </div>
    @endforeach
    </div>
    {{ $ads->links() }} 
    <!-- bouclé chacune des annonces  -->

        </div>
    </div>
</div>

@endsection

@section('extra-js')
<script>
function search(event){
    event.preventDefault()
    const words =document.querySelector('#words').value
    //    console.log(words)
    const url = document.querySelector('#searchForm').getAttribute('action')
        // `${url}`passe la valeur de l'action ci dessus
        // (valeur de variable dans ma requete post)
        axios.post(`${url}`, {
            // nom donné et variable words defini ligne 40
        words: words,

    })
    .then(function (response) {
        console.log(response);
        console.log(response.data.ads.lenght);

        const ads = response.data.ads

        let results = document.querySelector('#results')
        results.innerHTML = ''
        console.log(ads);
        console.log('lenght = '+ ads[0].lenght);
        console.log('lenght 2 = '+ ads.lenght);
        for(let i = 0; i < ads.length; i++) {
            
        
            let card = document.createElement('div')
            

            let cardBody = document.createElement('div')

            cardBody.classList.add('card-body')      
        
            card.classList.add('card', 'mb-3')

            let title = document.createElement('h5')

            title.classList.add('card-title')

            title.innerHTML = ads[i].title
            console.log(ads[i].title);

            let description = document.createElement('p')

            description.classList.add('card-text')

            description.innerHTML = ads[i].description

            cardBody.appendChild(title)

            cardBody.appendChild(description)

            card.appendChild(cardBody)

            results.appendChild(card)
        }

        
    })
    .catch(function (error) {
        console.log(error);
    });
}
</script>
@endsection