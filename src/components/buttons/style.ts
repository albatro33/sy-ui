interface ButtonStyleIF {
    width: number|string;
    height: number|string;
    backgroundColor: string;
    borderColor: string;
    borderWidth: number|string;
    borderRadius: number|string;
    color: string;
}

export const ButtonStyle: ButtonStyleIF = {
    width: 'auto',
    height: 30,
    backgroundColor: 'transparent',
    borderColor:'#d9d9d9',
    borderWidth: 1,
    borderRadius: 4,
    color: '#333'
}