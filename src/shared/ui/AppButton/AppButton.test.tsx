import { render, screen } from '@testing-library/react';
import { AppButton, AppButtonTheme } from './AppButton';

describe('AppButton', () => {
    test('Render AppButton', () => {
        render(<AppButton>TEST</AppButton>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Render AppButton with theme', () => {
        render(<AppButton theme={AppButtonTheme.CLEAR}>TEST</AppButton>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
