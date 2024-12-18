import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DEFAULT_LINKS = [
    { platform: 'github', url: '' },
    { platform: 'twitter', url: '' },
    { platform: 'linkedin', url: '' },
    { platform: 'instagram', url: '' }
];

const Form = () => {

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8">
            <div className="max-w-2xl mx-auto space-y-8">
                <h2 className="text-3xl font-bold text-center mb-8 glitch-text">
                    Configure Your Digital Identity
                </h2>

                <form onSubmit={()=>{}} className="space-y-6">
                    <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/50 shadow-lg shadow-cyan-500/20">
                        {/* {links.map((link, index) => (
                            <SocialLinkInput
                                key={index}
                                link={link}
                                index={index}
                                onUrlChange={handleUrlChange}
                                onPlatformChange={handlePlatformChange}
                                onRemove={() => removeLink(index)}
                                showRemove={index >= 4}
                            />
                        ))} */}

                        <div className="flex justify-center mt-6">
                            <button
                                variant="secondary"
                                type="button"
                                onClick={()=>{}}
                            >
                                Add Another Link
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full"
                    >
                        Generate Social Card
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;