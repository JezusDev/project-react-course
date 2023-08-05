import { render, screen } from '@testing-library/react';
import { AppButton, ThemeAppButton } from './AppButton';

describe('AppButton', () => {
    test('Render AppButton', () => {
        render(<AppButton>TEST</AppButton>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Render AppButton with theme', () => {
        render(<AppButton theme={ThemeAppButton.CLEAR}>TEST</AppButton>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
