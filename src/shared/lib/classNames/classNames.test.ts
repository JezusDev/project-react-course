import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('one param', () => {
        expect(classNames('className'))
            .toBe('className');
    });

    test('with addition without mods', () => {
        expect(classNames('className', {}, ['className1', 'className2']))
            .toBe('className className1 className2');
    });

    test('with mods and additional', () => {
        expect(classNames(classNames(
            'className',
            { hovered: true, selected: false },
            ['className1', 'className2'],
        )))
            .toBe('className className1 className2 hovered');
    });
});
