import { conf } from '@/conf';

export function makeTitle(title: string): string {
    const _prefix: string = '';
    const _suffix: string = '-';
    const _postfix: string = conf.app.name;
    const _title: string = `${_prefix} ${title} ${_suffix} ${_postfix}`;

    return _title;
}
