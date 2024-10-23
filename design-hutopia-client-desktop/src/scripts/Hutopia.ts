export interface Badge {
    icon: string,
    name: string,
    mainColor: number,
    detailsColor: number 
}

export interface Identity {
    id: number,
    name: string,
    propicUrl: string,
    badges: Badge[]
}

export interface Message {
    id: number,
    lastModification: Date,
    identity: Identity,
    content: string
}

export interface ChatChannel {
    id: number,
    name: string,
    messages: Message[]
}

export interface Server {
    id: number,
    name: string,
    propicUrl: string,
    bannerUrl: string,
    chatChannels: ChatChannel[]
}

export interface ServerList {
    servers: Server[]
}