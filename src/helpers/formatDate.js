import { formatDistanceToNow, format } from 'date-fns'

export const formatDateToNow = (date) => formatDistanceToNow(new Date(date), { addSuffix: true });

export const formatDate = date => format(new Date(date), 'Pp');
