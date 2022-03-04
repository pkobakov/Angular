function ticketsList (tickets: string[], orderBy: string){

    const result: Ticket[] = [];

    class Ticket {
        destination: string;
        price: number;
        status: string; 
    
        constructor(destination: string, price: number,status: string){
            this.destination = destination;
            this.price = price;
            this.status = status;
    
        }
    }

    for(let currentTicket of tickets){

        const ticketData: string[] = currentTicket.split('|');
        const ticket = new Ticket(ticketData[0], Number(ticketData[1]), ticketData[2]);
        result.push(ticket);
    }

    switch(orderBy){
        
        case 'destination': result.sort((a: Ticket, b: Ticket) => a.destination.localeCompare(b.destination)); break; 
        case 'price': result.sort((a: Ticket, b: Ticket) => a.price - b.price); break;
        case 'status': result.sort((a: Ticket, b: Ticket) => a.status.localeCompare(b.status));break;
    }

    console.log(result);
}



ticketsList(['Philadelphia|94.20|available',
         'New York City|95.99|available',
         'New York City|95.99|sold',
         'Boston|126.20|departed'
        ],
        'status'
    );