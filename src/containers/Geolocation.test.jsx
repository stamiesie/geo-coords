import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Geolocation from './Geolocation';

describe('Geolocation container', () => {
  it('displays current geolocation', async () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn().mockImplementationOnce((position) =>
        Promise.resolve(
          position({
            coords: { latitude: 45.5, longitude: -122.635 },
          })
        )
      ),
    };
    navigator.geolocation = mockGeolocation;

    render(<Geolocation />);

    const section = screen.getByRole('region', {
      name: 'coordinates',
    });
    expect(section).not.toBeEmptyDOMElement();

    const button = screen.getByRole('button', {
      name: 'refresh',
    });
    expect(button).not.toBeEmptyDOMElement();

    return waitFor(() => {
      const coords = screen.getAllByText('longitude', { exact: false });
      expect(coords).not.toHaveLength(0);
    });
  });
});
