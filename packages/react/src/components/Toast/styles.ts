import { styled } from '../../styles'

export const ToastContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '$gray800',
    gap: '$1',

    maxWidth: '360px',

    fontFamily: '$default',

    padding: '$3 $6',

    border: '1px solid $gray600',
    borderRadius: '$sm',

    span: {
        fontSize: '$sm',
        color: '$gray200'
    }
})


export const ToastHeading = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    
    strong: {
        fontSize: '$xl',
        color: '$white'
    },

    svg: {
        color: '$gray200',
        cursor: 'pointer'
    }
})

