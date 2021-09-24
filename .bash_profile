make(){
    if [ -z "$2" ]; then cd ./sort-app && nest generate resource "$1" --no-spec && cd ..; else cd ./sort-app && nest generate "$1" "$2" --no-spec && cd ..; fi
}

exec(){
    docker-compose exec app sh
}

start(){
    docker-compose up -d
}

stop(){
    docker-compose down
}