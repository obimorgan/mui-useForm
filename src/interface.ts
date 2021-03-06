export interface IValues {
    first_name: string
    last_name: string
    email: string
    password: string
}

export interface ILogin {
    email: string
    password: string
}

export interface ISignup {
    first_name: string
    last_name: string
    email: string
    password: string
}

export interface IConversation {
    user: string
    message: string
}

export interface IConversationList {
    conversations: IConversation[]
}